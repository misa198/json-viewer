import { tree } from 'd3-state-visualizer';
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import './Visualization.scss';

export default class Visualization extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  static getDerivedStateFromProps() {
    return null;
  }

  componentDidUpdate() {
    this.renderChart(this.props.data);
  }

  componentDidMount() {
    this.renderChart = tree(findDOMNode(this), {
      state: this.props.data,
      rootKeyName: 'response',
      onClickText: this.props.onClickText,
      size: 2000,
      aspectRatio: 0.5,
      isSorted: false,
      widthBetweenNodesCoeff: 1.5,
      heightBetweenNodesCoeff: 2,
      tooltipOptions: {
        offset: { left: 30, top: 10 },
        indentationSize: 2,
        style: {
          background: '#222',
          padding: '8px',
          color: '#4FDEE5',
          'border-radius': '2px',
          'box-shadow': '0 7px 7px 0 #111',
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
            parent: '#01ff70',
            default: '#1FB3D5',
          },
          stroke: 'white',
        },
        text: {
          colors: {
            default: '#A15AEC',
            hover: '#3DAAE0',
          },
          'font-size': '12px',
        },
        link: {
          stroke: '#188E3F',
          fill: 'none',
        },
      },
    });
    this.renderChart();
  }

  render() {
    return <div className="visualization" />;
  }
}
