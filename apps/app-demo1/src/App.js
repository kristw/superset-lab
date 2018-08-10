import React, { Component } from 'react';
import './App.css';
import { configure, SuperChart } from '@kristw-lab-superset/core';
import DebuggerChartPlugin from '@kristw-lab-superset/plugin-chart-debugger';

configure({
  plugins: [DebuggerChartPlugin],
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
        </p>
      </div>
    );
  }
}

export default App;
