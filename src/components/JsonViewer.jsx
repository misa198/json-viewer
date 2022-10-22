import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import { useSelector } from 'react-redux';
import { JsonViewerWrapper } from './JsonViewer.style';

const JsonViewer = ({ data }) => {
  const theme = useSelector((state) => state.layout.theme);

  return (
    <JsonViewerWrapper
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <ReactJson src={data} theme={theme} />
    </JsonViewerWrapper>
  );
};

JsonViewer.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default JsonViewer;
