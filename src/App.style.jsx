import styled from 'styled-components';
import { BACKGROUND_COLOR } from './common/themes';

export const AppWrapper = styled.div.attrs((props) => props)`
  position: relative;
  background: ${(props) => BACKGROUND_COLOR[props.theme]};
  min-height: 100vh;
  min-width: 100vw;
`;
