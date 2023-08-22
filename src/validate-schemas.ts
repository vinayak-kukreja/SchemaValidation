import * as fs from 'fs';
import path from 'path';
import { TypeGenerator, TypeGeneratorOptions } from 'json2jsii';
import { validateSchema } from './validation';

const storedSchemaPath = path.join(__dirname, '../chart-schemas');
const contents = fs.readdirSync(storedSchemaPath);

for (const schema of contents) {
  try {
    console.log(`Currently running: ${schema}`);

    const schemaFileContents = fs.readFileSync(
      path.join(storedSchemaPath, schema),
      'utf-8',
    );
    const schemaFile = JSON.parse(schemaFileContents);

    validateSchema(schemaFile);

    const options: TypeGeneratorOptions = {
      definitions: schemaFile.definitions,
    };

    const generator = new TypeGenerator(options);

    generator.emitType(
      `${TypeGenerator.normalizeTypeName(schema.split('.')[0])}Props`,
      schemaFile,
    );

    fs.writeFileSync(`${schema.split('.')[0]}.ts`, generator.render());

    console.log('_____________________________________');
  } catch (e) {
    console.error(`Error: ${e}`);
    console.log('_____________________________________');
    continue;
  }
}
