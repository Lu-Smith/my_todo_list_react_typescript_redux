import { configureStore } from '@reduxjs/toolkit';
import newtaskReducer from '../features/newtaskSlice';
import checkedtaskReducer from '../features/checkedtaskSlice';

export const store = configureStore({
  reducer: {
    newtask: newtaskReducer,
    checkedtask: checkedtaskReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch