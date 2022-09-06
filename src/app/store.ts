import { configureStore } from '@reduxjs/toolkit';
import newtaskReducer from '../features/newtaskSlice';
import allcheckedtaskReducer from '../features/allcheckedtaskSlice';

export const store = configureStore({
  reducer: {
    newtask: newtaskReducer,
    allcheckedtask: allcheckedtaskReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch