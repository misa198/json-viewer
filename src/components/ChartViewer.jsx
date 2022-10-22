import { useState } from 'react';
import { ChevronRight } from 'react-feather';
import { prepareData } from '../common/utils';
import './ChartViewer.scss';
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
    <div className="chart-viewer">
      <div className="rounded-md bg-slate-800 p-2 w-fit text-cyan-50 flex absolute top-2 left-2">
        {progress.map((item, index) => (
          <div key={index} className="flex items-center">
            <span
              className="text-sm cursor-pointer hover:text-yellow-400"
              onClick={() => onClickProgress(index)}
            >
              {item.name}
            </span>
            {index === progress.length - 1 ? null : <ChevronRight size={14} />}
          </div>
        ))}
      </div>
      <Visualization data={renderData} onClickText={onClickText} />
    </div>
  );
};

export default ChartViewer;
