import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};
const defaultProps = {
  className: '',
};

class InvalidChart extends React.Component {
  render() {
    const { className, type } = this.props;
    return (
      <div className={className}>
        <div class="alert alert-warning" role="alert">
          Unknown chart type: <code>{type}</code>.
          Please make sure to import and register the plugin for this chart
          (e.g. <code>plugin-chart-{type}</code>).
        </div>
      </div>
    );
  }
}

InvalidChart.propTypes = propTypes;
InvalidChart.defaultProps = defaultProps;

export default InvalidChart;
