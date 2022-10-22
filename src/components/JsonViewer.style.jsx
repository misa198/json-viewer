import { motion } from 'framer-motion';
import styled from 'styled-components';

export const JsonViewerWrapper = styled(motion.div)`
  .react-json-view {
    min-height: 100vh;
    min-width: 100vw;
    padding: 1rem;

    * {
      font-family: monospace !important;
    }
  }
`;
