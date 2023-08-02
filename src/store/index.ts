import { configureStore } from '@reduxjs/toolkit';

import todoRedicer from './slice/todo';

export const store = configureStore({
  reducer: {
    todoRedicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
