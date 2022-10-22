import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../store/modules/layout';
import { JsonViewerWrapper, JsonViewerTimestamp } from './JsonViewer.style';

const JsonViewer = ({ data }) => {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.layout.time);
  const theme = useSelector((state) => state.layout.theme);
  const iconStyle = useSelector((state) => state.layout.iconStyle);
  const onEdit = useSelector((state) => state.layout.onEdit);
  const onAdd = useSelector((state) => state.layout.onAdd);
  const onDelete = useSelector((state) => state.layout.onDelete);
  const displayObjectSize = useSelector(
    (state) => state.layout.displayObjectSize,
  );
  const enableClipboard = useSelector((state) => state.layout.enableClipboard);
  const displayDataTypes = useSelector(
    (state) => state.layout.displayDataTypes,
  );
  const indentWidth = useSelector((state) => state.layout.indentWidth);
  const collapsed = useSelector((state) => state.layout.collapsed);
  const collapseStringsAfterLength = useSelector(
    (state) => state.layout.collapseStringsAfterLength,
  );

  const onUpdateData = (e) => {
    dispatch(updateData(e.updated_src));
  };

  return (
    <JsonViewerWrapper
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <JsonViewerTimestamp theme={theme}>{`// ${time}`}</JsonViewerTimestamp>
      <ReactJson
        src={data}
        theme={theme}
        iconStyle={iconStyle}
        onEdit={onEdit ? onUpdateData : false}
        onAdd={onAdd ? onUpdateData : false}
        onDelete={onDelete ? onUpdateData : false}
        displayObjectSize={displayObjectSize}
        enableClipboard={enableClipboard}
        displayDataTypes={displayDataTypes}
        indentWidth={indentWidth}
        collapsed={collapsed}
        collapseStringsAfterLength={collapseStringsAfterLength}
      />
    </JsonViewerWrapper>
  );
};

JsonViewer.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default JsonViewer;
