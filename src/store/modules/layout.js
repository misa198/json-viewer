import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'chart', // 'json' or 'chart' or 'raw
  theme: 'apathy',
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {},
});

export default layoutSlice.reducer;
