import styled from 'styled-components';
import {
  BACKGROUND_COLOR,
  LINK_COLOR,
  PAPER_COLOR,
  TEXT_COLOR,
} from '../common/themes';

export const ChartViewerWrapper = styled.div``;

export const ChartViewerProgress = styled.div.attrs((props) => props)`
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  background: ${(props) => PAPER_COLOR[props.theme]};
  color: ${(props) => TEXT_COLOR[props.theme]};
`;

export const ChartViewerProgressStep = styled.div`
  display: flex;
  align-items: center;
`;

export const ChartViewerProgressStepLabel = styled.button.attrs(
  (props) => props,
)`
  margin: 0 4px;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.2s ease-in-out;
  background: none;
  border: none;
  color: ${(props) => TEXT_COLOR[props.theme]};
  user-select: none;

  &:hover {
    color: ${(props) => LINK_COLOR[props.theme]} !important;
  }
`;

export const ChartViewerVisualizationContainer = styled.div.attrs(
  (props) => props,
)`
  .visualization svg {
    background: ${(props) => BACKGROUND_COLOR[props.theme]};
  }
`;
