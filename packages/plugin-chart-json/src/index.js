import { ChartPlugin } from '@kristw-lab-superset/core';

const plugin = new ChartPlugin('json', () => import('./JsonChart.jsx'));
export default plugin;
