import { Plugin, SuperChart } from ‘@superset/core’;

export default class PluginChartJson extends Plugin {
  constructor(){
    super('chart-json'); // name, validate uniqueness against `superset-plugin-[name]`
  }
  install(name) {
    SuperChart.registry.add({
      name: name || this.name,
      load: () => import('./ChartJson'),
    });
  }
}