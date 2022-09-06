import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface NewTaskState {
  value: string[]
}

// Define the initial state using that type
const initialState: NewTaskState = {
  value: [],
}

export const newtaskSlice = createSlice({
  name: 'newtask',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addTask: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
})

export const { addTask } = newtaskSlice.actions

export default newtaskSlice.reducer