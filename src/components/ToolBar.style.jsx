import styled from 'styled-components';
import { PAPER_COLOR, PAPER_TEXT_COLOR, TEXT_COLOR } from '../common/themes';

export const ToolbarWrapper = styled.div.attrs((props) => props)`
  position: absolute;
  top: 8px;
  right: 8px;
  background: ${(props) => PAPER_COLOR[props.theme]};
  color: ${(props) => TEXT_COLOR[props.theme]};
  padding: 8px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  z-index: 20;
`;

export const ToolbarButton = styled.button.attrs((props) => props)`
  width: 32px;
  height: 32px;
  background: ${(props) => PAPER_TEXT_COLOR[props.theme]};
  color: ${(props) => PAPER_COLOR[props.theme]};
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 8px;
  transition: all 0.2s ease-in-out;
  filter: ${(props) =>
    props.active ? 'brightness(2) !important;' : 'brightness(1.2);'};

  &:hover {
    filter: brightness(1.4);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
