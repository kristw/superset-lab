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
        Unknown chart type: <code>{type}</code>.
        Please make sure the chart type was properly registered.
      </div>
    );
  }
}

InvalidChart.propTypes = propTypes;
InvalidChart.defaultProps = defaultProps;

export default InvalidChart;
