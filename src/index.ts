import * as fs from 'fs';
import path from 'path';
import { testCharts } from './test-charts';
import { runValidations } from './validation';

setup();

const main = async () => {
  for (const chart of testCharts) {
    try {
      console.log(`Currently running: ${chart.chartName}`);
      await runValidations(chart.chartUrl, chart.chartName, chart.chartVersion);
      console.log('_____________________________________');
    } catch (e) {
      console.error(`Error: ${e}`);
      console.log('_____________________________________');
      continue;
    }
  }
};

main();

function setup() {
  const directoryPath = path.join(__dirname, '../artifacts');
  const storedSchemaPath = path.join(__dirname, '../chart-schemas');

  fs.rmSync(directoryPath, { recursive: true });
  fs.rmSync(storedSchemaPath, { recursive: true });
  fs.mkdirSync(directoryPath);
  fs.mkdirSync(storedSchemaPath);
}
