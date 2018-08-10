import React, { Component } from 'react';
import './App.css';
import { configure, SuperChart } from '@kristw-lab-superset/core';
import JsonChartPlugin from '@kristw-lab-superset/plugin-chart-json';

configure({
  plugins: [JsonChartPlugin],
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test Plugin</h1>
        <p className="App-intro">
          <SuperChart type="abc" />
          <SuperChart type="json" />
        </p>
      </div>
    );
  }
}

export default App;
