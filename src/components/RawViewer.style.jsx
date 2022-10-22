import { motion } from 'framer-motion';
import styled from 'styled-components';
import { BACKGROUND_COLOR, TEXT_COLOR } from '../common/themes';

export const RawViewerWrapper = styled(motion.div).attrs((props) => props)`
  overflow-wrap: break-word;
  font-family: monospace !important;
  padding-right: 70px;
  padding-left: 4px;
  font-size: 12px;
  border: none;
  text-align: left;
  background: ${(props) => BACKGROUND_COLOR[props.theme]};
  color: ${(props) => TEXT_COLOR[props.theme]};
`;
