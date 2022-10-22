import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import { JsonViewerWrapper } from './JsonViewer.style';

const JsonViewer = ({ data }) => (
  <JsonViewerWrapper>
    <ReactJson src={data} />
  </JsonViewerWrapper>
);

JsonViewer.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default JsonViewer;
