import { ChartPlugin } from '@kristw-lab-superset/core';

// // Lazy load code
// // Need to fix some webpack settings
// const plugin = new ChartPlugin(
//   'json',
//   () => import('./JsonChart.jsx'),
// );
// export default plugin;

import JsonChart from './JsonChart';
const plugin = new ChartPlugin(
  'json',
  () => Promise.resolve(JsonChart),
);
export default plugin;
