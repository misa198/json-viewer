import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppWrapper } from './App.style';
import ChartViewer from './components/ChartViewer';
import GlobalStyle from './components/GlobalStyle';
import JsonViewer from './components/JsonViewer';
import RawViewer from './components/RawViewer';
import SettingsModal from './components/SettingsModal';
import ToolBar from './components/ToolBar';
import { updateData } from './store/modules/layout';

const App = ({ response }) => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.layout.mode);
  const theme = useSelector((state) => state.layout.theme);
  const data = useSelector((state) => state.layout.data);

  useEffect(() => {
    dispatch(updateData(response));
  }, [dispatch, response]);

  return (
    <>
      <GlobalStyle theme={theme} />
      <SettingsModal />
      <AppWrapper theme={theme}>
        <ToolBar />
        {mode === 'chart' && <ChartViewer data={data} />}
        {mode === 'raw' && <RawViewer data={data} />}
        {mode === 'tree' && <JsonViewer data={data} />}
      </AppWrapper>
    </>
  );
};

App.propTypes = {
  response: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default App;
