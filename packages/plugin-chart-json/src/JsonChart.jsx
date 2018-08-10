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
    const { id, className, ...otherProps } = this.props;
    return (
      <div id={id} className={className}>
        {Object.keys(otherProps).map(key =>
          <div>
            {key}: <code>{JSON.stringify(otherProps[key])}</code>
          </div>
        )}
      </div>
    );
  }
}

JsonChart.propTypes = propTypes;
JsonChart.defaultProps = defaultProps;

export default JsonChart;
