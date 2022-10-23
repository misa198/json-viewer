import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AppWrapper } from './App.style';
import { prepareData } from './common/utils';
import ChartViewer from './components/ChartViewer';
import GlobalStyle from './components/GlobalStyle';
import JsonViewer from './components/JsonViewer';
import RawViewer from './components/RawViewer';
import SettingsModal from './components/SettingsModal';
import ToolBar from './components/ToolBar';

const App = ({ response }) => {
  const mode = useSelector((state) => state.layout.mode);
  const theme = useSelector((state) => state.layout.theme);

  return (
    <>
      <GlobalStyle theme={theme} />
      <SettingsModal />
      <AppWrapper theme={theme}>
        <ToolBar />
        {mode === 'chart' && <ChartViewer data={prepareData(response)} />}
        {mode === 'raw' && <RawViewer data={response} />}
        {mode === 'tree' && <JsonViewer data={response} />}
      </AppWrapper>
    </>
  );
};

App.propTypes = {
  response: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default App;
