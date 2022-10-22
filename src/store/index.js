// @flow
import { configureStore } from '@reduxjs/toolkit';
import layout from './modules/layout';

export const store = configureStore({
  reducer: {
    layout,
  },
});
