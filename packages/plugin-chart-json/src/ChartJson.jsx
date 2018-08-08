import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
};
const defaultProps = {
  className: '',
};

class VisNumber extends React.Component {
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

VisNumber.propTypes = propTypes;
VisNumber.defaultProps = defaultProps;

export default VisNumber;
