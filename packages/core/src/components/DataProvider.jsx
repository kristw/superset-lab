import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
};
const defaultProps = {
  className: '',
};

class DataProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  render() {
    const { className } = this.props;
    const { data } = this.state;
    return (
      <div>
        {React.Children.map(child => React.cloneElement(child, { data }))}
      </div>
    )
  }
}

DataProvider.propTypes = propTypes;
DataProvider.defaultProps = defaultProps;

export default DataProvider;
