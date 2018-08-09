import React from 'react';
import PropTypes from 'prop-types';
import Registry from '../platform/Registry';
import InvalidChart from './InvalidChart';

const propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  input: PropTypes.object,
};
const defaultProps = {
  className: '',
};

const registry = new Registry();

class SuperChart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { Renderer: null };
  }

  componentDidMount() {
    this.loadChartType(this.props.type);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.type !== this.props.type) {
      this.loadChartType(nextProps.type);
    }
  }

  loadChartType(type) {
    // Clear renderer
    this.setState({ Renderer: null });
    const chartType = registry.get(type);
    if(chartType) {
      chartType.load().then(Renderer => {
        this.setState({ Renderer });
      });
    } else {
      this.setState({ Renderer: InvalidChart })
    }
  }

  render() {
    const { className, id, input } = this.props;
    const { Renderer } = this.state;

    if(Renderer) {
      return (
        <Renderer input={input} />
      );
    } else {
      return (
        <div id={id} className={className} />
      );
    }
  }
}

SuperChart.registry = registry;
SuperChart.propTypes = propTypes;
SuperChart.defaultProps = defaultProps;

export default SuperChart;
