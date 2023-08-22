import { writeFileSync, readFileSync, existsSync } from 'fs';
import * as path from 'path';
import { exit } from 'process';
// we just need the types from json-schema
// eslint-disable-next-line import/no-extraneous-dependencies
import { JSONSchema4 } from 'json-schema';
import { TypeGenerator, TypeGeneratorOptions } from 'json2jsii';
import { run } from './emit-custom-type';
import { pullHelmRepo } from './pull-repo';

export async function runValidations(
  chartUrl: string,
  chartName: string,
  chartVersion: string,
) {
  const workDir = pullHelmRepo(chartUrl, chartName, chartVersion);

  const schemaFileName = 'values.schema.json';
  const schemaFilePath = path.join(workDir, chartName, schemaFileName);

  if (!existsSync(schemaFilePath)) {
    console.log(schemaFilePath);
    console.log(`There is no schema file found for: ${chartName}`);
    exit();
  }

  const schemaFileContents = readFileSync(path.join(schemaFilePath), 'utf-8');

  // Copying schema for further investigation since Json2Jsii fails on first error
  writeFileSync(
    path.join(__dirname, '../chart-schemas', `${chartName}.json`),
    schemaFileContents,
    'utf-8',
  );

  const schemaFile = JSON.parse(schemaFileContents);

  validateSchema(schemaFile);

  const options: TypeGeneratorOptions = {
    definitions: schemaFile.definitions,
  };

  const generator = new TypeGenerator(options);

  generator.emitType(
    `${TypeGenerator.normalizeTypeName(chartName)}Props`,
    schemaFile,
  );

  writeFileSync('emit-types-demo.ts', generator.render());

  await run(workDir, schemaFile, chartName, chartUrl, chartVersion);
}

function validateSchema(sch: JSONSchema4, prop?: string) {
  if (!sch.properties) {
    commonValidations(sch, prop);
    return;
  }

  // for "properties", if "type" is specified it has to be an "object"
  // https://github.com/cdklabs/json2jsii/blob/main/src/type-generator.ts#L226-L239
  if (sch.type && sch.type !== 'object') {
    console.log(`Impacting Property (3) ---------> ${prop}`);
  }

  commonValidations(sch, prop);

  for (const property in sch.properties) {
    validateSchema(sch.properties[property], property);
  }
}

function commonValidations(sch: JSONSchema4, prop?: string) {
  //https://github.com/cdklabs/json2jsii/blob/main/src/type-generator.ts#L538
  if (sch.type === 'array' && (!sch.items || typeof sch.items !== 'object')) {
    console.log(`Impacting Property (1) ---------> ${prop}`);
  }

  //https://github.com/cdklabs/json2jsii/blob/main/src/type-generator.ts#L238
  if (
    sch.additionalProperties &&
    typeof sch.additionalProperties === 'object'
  ) {
    if (sch.type && sch.type !== 'object') {
      console.log(`Impacting Property (2) ---------> ${prop}`);
    }
  }
}
