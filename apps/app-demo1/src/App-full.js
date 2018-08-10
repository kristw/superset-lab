import React, { Component } from 'react';
import './App.css';
import { configure, SuperChart } from '@kristw-lab-superset/core';
import DebuggerChartPlugin from '@kristw-lab-superset/plugin-chart-debugger';
import ScatterplotChartPlugin from '@kristw-lab-superset/plugin-chart-scatterplot';

configure({
  plugins: [
    DebuggerChartPlugin,
    ScatterplotChartPlugin
  ],
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Example of Chart usage with the plugin system.</h1>
        <p>
          This page uses <code>SuperChart</code> to render data.
          The available chart types are registered by the developers.
        </p>
        <p className="App-intro">
          <hr/>
          This is the "abc" chart, which is not registered.
          <SuperChart type="abc" />
          <hr/>
          This is the "debugger" chart type, which just print out <code>props</code>
          <SuperChart
            type="debugger"
            data={{a:1, b:2}}
            settings={{splitBy: 'country'}}
          />
          <hr/>
          This is the "scatterplot" chart type.
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
