import { createSlice } from '@reduxjs/toolkit';

const SETTING_MODE = 'JSON_VIEWER_SETTING_MODE';
const SETTING_THEME = 'JSON_VIEWER_SETTING_THEME';
const ICON_STYLE = 'JSON_VIEWER_ICON_STYLE';
const ENABLE_EDIT = 'JSON_VIEWER_ENABLE_EDIT';
const ENABLE_ADD = 'JSON_VIEWER_ENABLE_ADD';
const ENABLE_DELETE = 'JSON_VIEWER_ENABLE_DELETE';
const ENABLE_COPY = 'JSON_VIEWER_ENABLE_COPY';
const DISPLAY_DATA_TYPE = 'JSON_VIEWER_DISPLAY_DATA_TYPE';
const DISPLAY_DATA_SIZE = 'JSON_VIEWER_DISPLAY_DATA_SIZE';
const IDENT_WITH_SPACES = 'JSON_VIEWER_IDENT_WITH_SPACES';
const COLLAPSED = 'JSON_VIEWER_COLLAPSED';
const COLLAPSED_LEVEL = 'JSON_VIEWER_COLLAPSED_LEVEL';

const initialState = {
  time: new Date().toISOString(),
  mode: localStorage.getItem(SETTING_MODE) || 'chart', // 'tree' or 'chart' or 'raw
  theme: localStorage.getItem(SETTING_THEME) || 'rjv-default',
  iconStyle: localStorage.getItem(ICON_STYLE) || 'triangle',
  onEdit: localStorage.getItem(ENABLE_EDIT) === 'true' || false,
  onAdd: localStorage.getItem(ENABLE_ADD) === 'true' || false,
  onDelete: localStorage.getItem(ENABLE_DELETE) === 'true' || false,
  displayObjectSize:
    localStorage.getItem(DISPLAY_DATA_SIZE) === 'true' || false,
  enableClipboard: localStorage.getItem(ENABLE_COPY) === 'false' || true,
  indentWidth: localStorage.getItem(IDENT_WITH_SPACES) || 4,
  displayDataTypes: localStorage.getItem(DISPLAY_DATA_TYPE) === 'true' || false,
  collapsed: localStorage.getItem(COLLAPSED) === 'true' || false,
  collapseStringsAfter: localStorage.getItem(COLLAPSED_LEVEL) || 100,
  openModal: false,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    changeMode(state, action) {
      state.mode = action.payload;
      localStorage.setItem(SETTING_MODE, action.payload);
    },
    toggleModal(state) {
      state.openModal = !state.openModal;
    },
    changeConfig(state, action) {
      const { key, value } = action.payload;
      state[key] = value;
      switch (key) {
        case 'theme':
          localStorage.setItem(SETTING_THEME, value);
          break;
        case 'iconStyle':
          localStorage.setItem(ICON_STYLE, value);
          break;
        case 'onEdit':
          localStorage.setItem(ENABLE_EDIT, value);
          break;
        case 'onAdd':
          localStorage.setItem(ENABLE_ADD, value);
          break;
        case 'onDelete':
          localStorage.setItem(ENABLE_DELETE, value);
          break;
        case 'displayObjectSize':
          localStorage.setItem(DISPLAY_DATA_SIZE, value);
          break;
        case 'enableClipboard':
          localStorage.setItem(ENABLE_COPY, value);
          break;
        case 'indentWidth':
          localStorage.setItem(IDENT_WITH_SPACES, value);
          break;
        case 'displayDataTypes':
          localStorage.setItem(DISPLAY_DATA_TYPE, value);
          break;
        case 'collapsed':
          localStorage.setItem(COLLAPSED, value);
          break;
        case 'collapseStringsAfter':
          localStorage.setItem(COLLAPSED_LEVEL, value);
          break;
        default:
          break;
      }
    },
  },
});

export default layoutSlice.reducer;
export const { changeMode, toggleModal, changeConfig, updateData } =
  layoutSlice.actions;
