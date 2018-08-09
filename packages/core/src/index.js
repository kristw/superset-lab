import configureConnection from './connection/SupersetService';
import configurePlatform from './platform/configure';

export { default as Plugin } from './platform/Plugin.js';
export { default as Preset } from './platform/Preset.js';
export { default as SuperChart } from './components/SuperChart';

export function configure(config) {
  if(config.connection) {
    configureConnection(config.connection);
  }
  const { presets, plugins } = config;
  if(presets || plugins) {
    configurePlatform({ presets, plugins });
  }
}