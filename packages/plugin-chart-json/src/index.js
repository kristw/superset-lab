import { Plugin, SuperChart } from ‘@kristw-lab-superset/core’;

export default class PluginChartJson extends Plugin {
  constructor(){
    super('json'); // name, validate uniqueness against `superset-plugin-[name]`
  }
  install(name) {
    SuperChart.registry.add({
      name: name || this.name,
      load: () => import('./ChartJson'),
    });
  }
}