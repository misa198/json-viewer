import styled from 'styled-components';
import {
  TEXT_COLOR,
  PAPER_COLOR,
  PAPER_TEXT_COLOR,
  BACKGROUND_COLOR,
} from '../common/themes';

export const SettingsModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  position: relative;
`;

export const SettingsModalTitle = styled.div`
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: ${(props) => BACKGROUND_COLOR[props.theme]};
  font-size: 1.2rem;
`;

export const SettingModalContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const SettingsModalCloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  border: none;
  background: none;
  color: ${(props) => TEXT_COLOR[props.theme]};
  cursor: pointer;
`;

export const SettingsModalFormControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const SettingsModalFormLabel = styled.label`
  color: ${(props) => PAPER_TEXT_COLOR[props.theme]};
  font-size: 14px;
`;

export const SettingsModalSelect = styled.select`
  width: 100%;
  padding: 8px 10px;
  border: none;
  border-radius: 4px;
  background: ${(props) => PAPER_COLOR[props.theme]};
  color: ${(props) => PAPER_TEXT_COLOR[props.theme]};
  outline: none;
  cursor: pointer;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  width: 40%;
`;

export const SettingsModalCheckbox = styled.input`
  margin-right: 0.5rem;
`;
