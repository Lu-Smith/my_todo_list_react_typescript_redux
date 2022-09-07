import { configureStore } from '@reduxjs/toolkit';
import newtaskReducer from '../features/newtaskSlice';
import allcheckedtaskReducer from '../features/allcheckedtaskSlice';
import changethemesReducer from '../features/changethemesSlice';

export const store = configureStore({
  reducer: {
    newtask: newtaskReducer,
    allcheckedtask: allcheckedtaskReducer,
    changethemes: changethemesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch