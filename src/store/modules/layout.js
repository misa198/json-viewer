import { createSlice } from '@reduxjs/toolkit';

const SETTING_MODE = 'SETTING_MODE';

const initialState = {
  mode: localStorage.getItem(SETTING_MODE) || 'chart', // 'tree' or 'chart' or 'raw
  theme: 'apathy',
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    changeMode(state, action) {
      state.mode = action.payload;
      localStorage.setItem(SETTING_MODE, action.payload);
    },
  },
});

export default layoutSlice.reducer;
export const { changeMode } = layoutSlice.actions;
