import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  settings: PropTypes.object,
};
const defaultProps = {
  className: '',
  data: {},
  settings: {},
};

class JsonChart extends React.PureComponent {
  render() {
    const { className, data, settings } = this.props;
    return (
      <div className={className}>
        <div>data: {JSON.stringify(data)}</div>
        <div>settings: {JSON.stringify(settings)}</div>
      </div>
    );
  }
}

JsonChart.propTypes = propTypes;
JsonChart.defaultProps = defaultProps;

export default JsonChart;
