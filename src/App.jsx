import { useState, useEffect } from 'react';
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

  const [data, setData] = useState(null);

  useEffect(() => {
    setData(response);
  }, [response]);

  return (
    <>
      <GlobalStyle theme={theme} />
      <SettingsModal />
      <AppWrapper theme={theme}>
        <ToolBar />
        {data && (
          <>
            {mode === 'chart' && <ChartViewer data={prepareData(data)} />}
            {mode === 'raw' && <RawViewer data={data} />}
            {mode === 'tree' && <JsonViewer data={data} setData={setData} />}
          </>
        )}
      </AppWrapper>
    </>
  );
};

App.propTypes = {
  response: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default App;
