import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
};
const defaultProps = {
  className: '',
};

class SupersetProvider extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

SupersetProvider.propTypes = propTypes;
SupersetProvider.defaultProps = defaultProps;

export default SupersetProvider;
