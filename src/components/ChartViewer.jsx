import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { ChevronRight } from 'react-feather';
import { useSelector } from 'react-redux';
import {
  LINK_COLOR,
  NODE_LEAF_COLOR,
  NODE_PARENT_COLOR,
  PAPER_COLOR,
  PAPER_TEXT_COLOR,
  TEXT_COLOR,
  TEXT_HOVER_COLOR,
} from '../common/themes';
import { prepareData } from '../common/utils';
import {
  ChartViewerProgress,
  ChartViewerProgressStep,
  ChartViewerProgressStepLabel,
  ChartViewerVisualizationContainer,
  ChartViewerWrapper,
} from './ChartViewer.style';
import Visualization from './Visualization';

const ChartViewer = ({ data }) => {
  const allData = prepareData(data);
  const initialProgress = [
    {
      name: 'response',
      value: allData,
    },
  ];

  const [renderData, setRenderData] = useState(allData);
  const [progress, setProgress] = useState(initialProgress);
  const theme = useSelector((state) => state.layout.theme);
  const colors = useMemo(
    () => ({
      link: LINK_COLOR[theme],
      parentNode: NODE_PARENT_COLOR[theme],
      leafNode: NODE_LEAF_COLOR[theme],
      text: TEXT_COLOR[theme],
      textHover: TEXT_HOVER_COLOR[theme],
      tooltipBg: PAPER_COLOR[theme],
      tooltipText: PAPER_TEXT_COLOR[theme],
    }),
    [theme],
  );

  const onClickText = (node) => {
    const { id } = node;
    if (id === 'root') {
      setRenderData(allData);
      setProgress(initialProgress);
      return;
    }
    const stepsFromRootNode = id.split('|');
    stepsFromRootNode.shift();
    let newProgress = [
      {
        name: 'response',
        value: allData,
      },
    ];
    let newRenderData = {};
    stepsFromRootNode.forEach((item) => {
      newProgress = [
        ...newProgress,
        {
          name: item,
          value: newProgress[newProgress.length - 1].value[item],
        },
      ];
    });
    const reversedSteps = stepsFromRootNode.slice().reverse();
    reversedSteps.forEach((_item, index) => {
      if (index === 0) {
        newRenderData = {
          [reversedSteps[index]]: newProgress[newProgress.length - 1].value,
        };
      } else {
        newRenderData = { [reversedSteps[index]]: newRenderData };
      }
    });
    setProgress(newProgress);
    setRenderData(newRenderData);
  };

  const onClickProgress = (index) => {
    const newProgress = progress.slice(1, index + 1);
    const id = ['root', ...newProgress.map((item) => item.name)].join('|');
    onClickText({ id });
  };

  return (
    <ChartViewerWrapper className="chart-viewer">
      <ChartViewerProgress theme={theme}>
        {progress.map((item, index) => (
          <ChartViewerProgressStep key={item.name + index}>
            <ChartViewerProgressStepLabel
              theme={theme}
              type="button"
              onClick={() => onClickProgress(index)}
            >
              {item.name}
            </ChartViewerProgressStepLabel>
            {index === progress.length - 1 ? null : <ChevronRight size={14} />}
          </ChartViewerProgressStep>
        ))}
      </ChartViewerProgress>
      <ChartViewerVisualizationContainer theme={theme}>
        <Visualization
          key={theme}
          data={renderData}
          onClickText={onClickText}
          colors={colors}
        />
      </ChartViewerVisualizationContainer>
    </ChartViewerWrapper>
  );
};

ChartViewer.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default ChartViewer;
