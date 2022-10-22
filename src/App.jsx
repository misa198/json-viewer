// @flow
import { useSelector } from 'react-redux';
import ChartViewer from './components/ChartViewer';
import JsonViewer from './components/JsonViewer';
import data from './data.json';

const App = (): React$Element<any> => {
  const mode = useSelector((state) => state.layout.mode);

  return (
    <div className="relative">
      {mode === 'chart' ? (
        <ChartViewer data={data} />
      ) : (
        <JsonViewer data={data} />
      )}
    </div>
  );
};

export default App;
