// @flow
import styled from 'styled-components';
import {
  BACKGROUND_COLOR,
  LINK_COLOR,
  PAPER_COLOR,
  TEXT_COLOR,
} from '../common/themes';

export const ChartViewerWrapper = styled.div``;

export const ChartViewerProgress = styled.div.attrs(
  (props: { theme: string }) => props,
)`
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  background: ${(props) => PAPER_COLOR[props.theme]};
  color: ${(props) => TEXT_COLOR[props.theme]};
`;

export const ChartViewerProgressStep = styled.button.attrs(
  (props: { theme: string, active: boolean }) => props,
)`
  margin: 0 4px;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${(props) => LINK_COLOR[props.theme]} !important;
  }
`;

export const ChartViewerVisualizationContainer = styled.div.attrs(
  (props: { theme: string }) => props,
)`
  .visualization svg {
    background: ${(props) => BACKGROUND_COLOR[props.theme]};
  }
`;
