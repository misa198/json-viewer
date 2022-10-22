// @flow
import { tree } from 'd3-state-visualizer';
import * as React from 'react';
import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { VisualizationWrapper } from './Visualization.style';

type Props = {
  data: Object | Array<any>,
  onClickText: Function,
  colors: {
    link: string,
    text: string,
    textHover: string,
    parentNode: string,
    leafNode: string,
    tooltipBg: string,
    tooltipText: string,
  },
};

export default class Visualization extends Component<Props> {
  renderChart: Function;

  static getDerivedStateFromProps(): null {
    return null;
  }

  state: Object = {};

  componentDidMount() {
    const { data, onClickText } = this.props;
    const { colors } = this.props;
    this.renderChart = tree(findDOMNode(this), {
      state: data,
      rootKeyName: 'response',
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

  componentDidUpdate(): Object {
    const { data } = this.props;
    this.renderChart(data);
    return this.state;
  }

  render(): React.Node {
    return <VisualizationWrapper className="visualization" />;
  }
}
