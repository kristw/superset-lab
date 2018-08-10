import configureConnection from './connection/SupersetService.js';
import configurePlatform from './platform/configure.js';

export { default as Plugin } from './platform/Plugin.js';
export { default as Preset } from './platform/Preset.js';
export { default as SuperChart } from './components/SuperChart.jsx';

export function configure(config) {
  if(config.connection) {
    configureConnection(config.connection);
  }
  const { presets, plugins } = config;
  if(presets || plugins) {
    configurePlatform({ presets, plugins });
  }
}