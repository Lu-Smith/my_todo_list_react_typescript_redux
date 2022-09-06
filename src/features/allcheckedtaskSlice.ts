import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface AllCheckedTaskState {
  value: string
}

// Define the initial state using that type
const initialState: AllCheckedTaskState = {
  value: "allundone",
}

export const allcheckedtaskSlice = createSlice({
  name: 'allcheckedtask',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    allDoneTasks: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
})

export const { allDoneTasks } = allcheckedtaskSlice.actions

export default allcheckedtaskSlice.reducer