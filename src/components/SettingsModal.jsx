import { X } from 'react-feather';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  booleanOptions,
  collapseStringsAfterLengthOptions,
  iconStyles,
  indentWidthOptions,
  themes,
} from '../common/constants';
import { changeConfig, toggleModal } from '../store/modules/layout';
import {
  SettingModalContainer,
  SettingsModalCloseButton,
  SettingsModalFormControl,
  SettingsModalFormLabel,
  SettingsModalSelect,
  SettingsModalTitle,
  SettingsModalWrapper,
} from './SettingsModal.style';

const SettingsModal = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.layout.theme);
  const iconStyle = useSelector((state) => state.layout.iconStyle);
  const openModal = useSelector((state) => state.layout.openModal);
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

  const onToggleModal = () => {
    dispatch(toggleModal());
  };

  const onChange = (key, value) => {
    dispatch(changeConfig({ key, value }));
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={onToggleModal}
      closeTimeoutMS={200}
    >
      <SettingsModalWrapper>
        <SettingsModalTitle theme={theme}>Settings</SettingsModalTitle>
        <SettingsModalCloseButton theme={theme} onClick={onToggleModal}>
          <X />
        </SettingsModalCloseButton>

        <SettingModalContainer>
          <SettingsModalFormControl>
            <SettingsModalFormLabel theme={theme}>Theme</SettingsModalFormLabel>
            <SettingsModalSelect
              theme={theme}
              onChange={(e) => onChange('theme', e.target.value)}
              value={theme}
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </SettingsModalSelect>
          </SettingsModalFormControl>

          <SettingsModalFormControl>
            <SettingsModalFormLabel theme={theme}>
              Icon Style
            </SettingsModalFormLabel>
            <SettingsModalSelect
              theme={theme}
              onChange={(e) => onChange('iconStyle', e.target.value)}
              value={iconStyle}
            >
              {iconStyles.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SettingsModalSelect>
          </SettingsModalFormControl>

          <SettingsModalFormControl>
            <SettingsModalFormLabel theme={theme}>
              Enable Edit
            </SettingsModalFormLabel>
            <SettingsModalSelect
              theme={theme}
              onChange={(e) => onChange('onEdit', e.target.value === 'true')}
              value={onEdit}
            >
              {booleanOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SettingsModalSelect>
          </SettingsModalFormControl>

          <SettingsModalFormControl>
            <SettingsModalFormLabel theme={theme}>
              Enable Add
            </SettingsModalFormLabel>
            <SettingsModalSelect
              theme={theme}
              onChange={(e) => onChange('onAdd', e.target.value === 'true')}
              value={onAdd}
            >
              {booleanOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SettingsModalSelect>
          </SettingsModalFormControl>

          <SettingsModalFormControl>
            <SettingsModalFormLabel theme={theme}>
              Enable Delete
            </SettingsModalFormLabel>
            <SettingsModalSelect
              theme={theme}
              onChange={(e) => onChange('onDelete', e.target.value === 'true')}
              value={onDelete}
            >
              {booleanOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SettingsModalSelect>
          </SettingsModalFormControl>

          <SettingsModalFormControl>
            <SettingsModalFormLabel theme={theme}>
              Enable Clipboard
            </SettingsModalFormLabel>
            <SettingsModalSelect
              theme={theme}
              onChange={(e) =>
                onChange('enableClipboard', e.target.value === 'true')
              }
              value={enableClipboard}
            >
              {booleanOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SettingsModalSelect>
          </SettingsModalFormControl>

          <SettingsModalFormControl>
            <SettingsModalFormLabel theme={theme}>
              Display Data Types
            </SettingsModalFormLabel>
            <SettingsModalSelect
              theme={theme}
              onChange={(e) =>
                onChange('displayDataTypes', e.target.value === 'true')
              }
              value={displayDataTypes}
            >
              {booleanOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SettingsModalSelect>
          </SettingsModalFormControl>

          <SettingsModalFormControl>
            <SettingsModalFormLabel theme={theme}>
              Display Object Size
            </SettingsModalFormLabel>
            <SettingsModalSelect
              theme={theme}
              onChange={(e) =>
                onChange('displayObjectSize', e.target.value === 'true')
              }
              value={displayObjectSize}
            >
              {booleanOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SettingsModalSelect>
          </SettingsModalFormControl>

          <SettingsModalFormControl>
            <SettingsModalFormLabel theme={theme}>
              Collapsed
            </SettingsModalFormLabel>
            <SettingsModalSelect
              theme={theme}
              onChange={(e) => onChange('collapsed', e.target.value === 'true')}
              value={collapsed}
            >
              {booleanOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SettingsModalSelect>
          </SettingsModalFormControl>

          <SettingsModalFormControl>
            <SettingsModalFormLabel theme={theme}>
              Collapse Strings After Length
            </SettingsModalFormLabel>
            <SettingsModalSelect
              theme={theme}
              onChange={(e) =>
                onChange(
                  'collapseStringsAfterLength',
                  e.target.value === 'false'
                    ? false
                    : parseInt(e.target.value, 10),
                )
              }
              value={collapseStringsAfterLength}
            >
              {collapseStringsAfterLengthOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SettingsModalSelect>
          </SettingsModalFormControl>

          <SettingsModalFormControl>
            <SettingsModalFormLabel theme={theme}>
              Ident Width
            </SettingsModalFormLabel>
            <SettingsModalSelect
              theme={theme}
              onChange={(e) => onChange('indentWidth', e.target.value)}
              value={indentWidth}
            >
              {indentWidthOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SettingsModalSelect>
          </SettingsModalFormControl>
        </SettingModalContainer>
      </SettingsModalWrapper>
    </Modal>
  );
};

export default SettingsModal;
