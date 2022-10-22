import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { RawViewerWrapper } from './RawViewer.style';

const RawViewer = ({ data }) => {
  const theme = useSelector((state) => state.layout.theme);

  return (
    <RawViewerWrapper
      theme={theme}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      {JSON.stringify(data)}
    </RawViewerWrapper>
  );
};

RawViewer.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default RawViewer;
