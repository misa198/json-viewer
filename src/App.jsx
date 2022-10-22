import { useSelector } from 'react-redux';
import { AppWrapper } from './App.style';
import ChartViewer from './components/ChartViewer';
import JsonViewer from './components/JsonViewer';
import RawViewer from './components/RawViewer';
import ToolBar from './components/ToolBar';
import data from './data.json';

const App = () => {
  const mode = useSelector((state) => state.layout.mode);
  const theme = useSelector((state) => state.layout.theme);

  return (
    <AppWrapper theme={theme}>
      <ToolBar />
      {mode === 'chart' && <ChartViewer data={data} />}
      {mode === 'raw' && <RawViewer data={data} />}
      {mode === 'tree' && <JsonViewer data={data} />}
    </AppWrapper>
  );
};

export default App;
