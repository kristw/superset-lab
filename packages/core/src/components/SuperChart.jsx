import React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import PropTypes from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import Registry from '../Registry';

const propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};
const defaultProps = {
  className: '',
};

const registry = new Registry();

class SuperChart extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        under construction
      </div>
    );
  }
}

SuperChart.registry = registry;
SuperChart.propTypes = propTypes;
SuperChart.defaultProps = defaultProps;

export default SuperChart;
