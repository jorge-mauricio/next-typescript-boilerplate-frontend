import { configureStore } from '@reduxjs/toolkit';

import savedPropertiesReducer from './savedPropertiesSlice';

export const store = configureStore({
  reducer: {
    savedProperties: savedPropertiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
