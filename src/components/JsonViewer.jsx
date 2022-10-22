// @flow
import * as React from 'react';
import ReactJson from 'react-json-view';
import { JsonViewerWrapper } from './JsonViewer.style';

type Props = {
  data: Object | Array<any>,
};

const JsonViewer: React$ComponentType<Props> = ({ data }) => (
  <JsonViewerWrapper>
    <ReactJson src={data} />
  </JsonViewerWrapper>
);

export default JsonViewer;
