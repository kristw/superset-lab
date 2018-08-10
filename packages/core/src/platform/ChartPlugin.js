import Plugin from './Plugin';
import SuperChart from '../components/SuperChart';

export default class ChartPlugin extends Plugin {
  constructor(name, load) {
    super(name);
    this.load = load;
  }

  install(name) {
    SuperChart.registry.add(this.name, this);
  }
}