// @flow
import { createSlice } from '@reduxjs/toolkit';

export type DisplayType = 'tree' | 'chart' | 'raw';

type State = {
  mode: DisplayType,
  theme: string,
};

const initialState: State = {
  mode: 'chart',
  theme: 'apathy',
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {},
});

export default layoutSlice.reducer;
