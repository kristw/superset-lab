import { ChartPlugin } from '@kristw-lab-superset/core';

// // Lazy load code
// // Need to fix some webpack settings
// const plugin = new ChartPlugin(
//   'debugger',
//   () => import('./Scatterplot.jsx'),
// );
// export default plugin;

import Scatterplot from './Scatterplot';
const plugin = new ChartPlugin(
  'scatterplot',
  () => Promise.resolve(Scatterplot),
);
export default plugin;
