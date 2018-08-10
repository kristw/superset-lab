import { ChartPlugin } from ‘@kristw-lab-superset/core’;

export default class JsonChartPlugin extends ChartPlugin {
  constructor(){
    super('json', () => import('./JsonChart.jsx'));
  }
}