import Plugin from './Plugin';
import SuperChart from '../components/SuperChart';

export default class ChartPlugin extends Plugin {
  constructor(name, loadFn) {
    super(name);
    this.loadFn = load;
  }

  install(name) {
    SuperChart.registry.add({
      name: name || this.name,
      load: this.loadFn,
    });
  }
}