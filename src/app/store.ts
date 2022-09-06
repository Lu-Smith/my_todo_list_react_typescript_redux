import { configureStore } from '@reduxjs/toolkit';
import newtaskReducer from '../features/newtaskSlice';

export const store = configureStore({
  reducer: {
    newtask: newtaskReducer,

  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch