import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface CheckedTaskState {
  value: string
}

// Define the initial state using that type
const initialState: CheckedTaskState = {
  value: "",
}

export const checkedtaskSlice = createSlice({
  name: 'checkedtask',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    doneTask: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
})

export const { doneTask } = checkedtaskSlice.actions

export default checkedtaskSlice.reducer