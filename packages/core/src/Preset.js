export default class Preset {
  constructor({ name, namespace = '', presets = [], plugins = []}) {
    this.name = name;
    this.namespace = namespace;
    this.presets = presets
      .map(preset => (preset instanceof Preset) ? preset : new Preset(preset));
    this.plugins = plugins;
  }

  expandPlugins() {
    const plugins = {};
    const addPlugin = plugin => {
      plugins[`${this.namespace}${plugin.name}`] = plugin;
    }
    this.presets
      .map(preset => preset.expandPlugins())
      .forEach(plugins => {
        plugins.forEach(addPlugin);
      });
    this.plugins.forEach(addPlugin);
    return plugins;
  }

  install() {
    const plugins = this.expandPlugins();
    Object.keys(this.plugins)
      .forEach(key => { plugins[key].install(key) });
  }
}
