import { ChartPlugin } from '@kristw-lab-superset/core';

// // Lazy load code
// // Need to fix some webpack settings
// const plugin = new ChartPlugin(
//   'debugger',
//   () => import('./DebuggerChart.jsx'),
// );
// export default plugin;

import DebuggerChart from './DebuggerChart';
const plugin = new ChartPlugin(
  'debugger',
  () => Promise.resolve(DebuggerChart),
);
export default plugin;
