// @flow
import ChartViewer from './components/ChartViewer';
import data from './data.json';

const App = (): React$Element<any> => {
  const a = [];

  return (
    <div>
      <ChartViewer data={data} />
    </div>
  );
};

export default App;
