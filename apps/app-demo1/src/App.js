import React, { Component } from 'react';
import './App.css';
import { configure, SuperChart } from '@kristw-lab-superset/core';
import DebuggerChartPlugin from '@kristw-lab-superset/plugin-chart-debugger';
import ScatterplotChartPlugin from '@kristw-lab-superset/plugin-chart-scatterplot';

configure({
  plugins: [DebuggerChartPlugin, ScatterplotChartPlugin],
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test Plugin</h1>
        <p className="App-intro">
          <SuperChart type="abc" />
          <hr/>
          <SuperChart
            type="debugger"
            data={{a:1, b:2}}
            settings={{splitBy: 'country'}}
          />
          <hr/>
          <SuperChart
            type="scatterplot"
            data={[{x:1, y:2}, {x:2, y:3}]}
          />
        </p>
      </div>
    );
  }
}

export default App;
