import { motion } from 'framer-motion';
import styled from 'styled-components';
import { PAPER_TEXT_COLOR } from '../common/themes';

export const JsonViewerWrapper = styled(motion.div)`
  min-height: 100vh;
  min-width: 100vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  .react-json-view {
    flex: 1;

    * {
      font-family: monospace !important;
      font-size: 12px !important;
    }
  }
`;

export const JsonViewerTimestamp = styled.div.attrs((props) => props)`
  font-family: monospace !important;
  font-size: 16px;
  color: ${(props) => PAPER_TEXT_COLOR[props.theme]};
  font-style: italic;
  margin-bottom: 1rem;
`;
