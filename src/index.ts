import { testCharts } from './test-charts';
import { runValidations } from './validation';

console.log('Hello World');

const main = async () => {
  for (const chart of testCharts) {
    console.log(`Currently running: ${chart.chartName}`);
    await runValidations(chart.chartUrl, chart.chartName, chart.chartVersion);
  }
};

main();
