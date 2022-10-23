import { tree } from 'd3-state-visualizer';
import * as React from 'react';
import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { VisualizationWrapper } from './Visualization.style';
import PropTypes from 'prop-types';

export default class Visualization extends Component {
  renderChart;

  static getDerivedStateFromProps() {
    return null;
  }

  state = {};

  componentDidMount() {
    const { data, onClickText } = this.props;
    const { colors } = this.props;
    this.renderChart = tree(findDOMNode(this), {
      state: data,
      rootKeyName: 'root',
      onClickText: onClickText,
      size: 2000,
      aspectRatio: 0.5,
      isSorted: false,
      widthBetweenNodesCoeff: 1.5,
      heightBetweenNodesCoeff: 2,
      tooltipOptions: {
        offset: { left: 30, top: 10 },
        indentationSize: 2,
        style: {
          background: colors.tooltipBg,
          padding: '8px',
          color: colors.tooltipText,
          'border-radius': '2px',
          'box-shadow': '0 2px 2px 0 #111',
          'font-size': '13px',
          'line-height': '1.3',
          'font-family': 'monospace',
        },
      },
      margin: {
        top: 50,
        left: 100,
      },
      style: {
        node: {
          colors: {
            collapsed: 'red',
            parent: colors.parentNode,
            default: colors.leafNode,
          },
          stroke: 'white',
        },
        text: {
          colors: {
            default: colors.text,
            hover: colors.textHover,
          },
          'font-size': '12px',
        },
        link: {
          stroke: colors.link,
          fill: 'none',
        },
      },
    });
    this.renderChart();
  }

  componentDidUpdate() {
    const { data } = this.props;
    this.renderChart(data);
    return this.state;
  }

  render() {
    return <VisualizationWrapper className="visualization" />;
  }
}

Visualization.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  onClickText: PropTypes.func.isRequired,
  colors: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    textHover: PropTypes.string.isRequired,
    parentNode: PropTypes.string.isRequired,
    leafNode: PropTypes.string.isRequired,
    tooltipBg: PropTypes.string.isRequired,
    tooltipText: PropTypes.string.isRequired,
  }).isRequired,
};
