import configureConnection from './connection/SupersetService.js';
import configurePlatform from './platform/configure.js';

export { default as Plugin } from './platform/Plugin.js';
export { default as Preset } from './platform/Preset.js';
export { default as ChartPlugin } from './platform/ChartPlugin.js';
export { default as SuperChart } from './components/SuperChart.jsx';

export function configure({
  name='app',
  connection,
  presets,
  plugins
}) {
  if(connection) {
    configureConnection(connection);
  }
  if(presets || plugins) {
    configurePlatform({ name, presets, plugins });
  }
}