import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface ChangeThemesState {
  value: string
}

// Define the initial state using that type
const initialState: ChangeThemesState = {
  value: "original",
}

export const changethemesSlice = createSlice({
  name: 'changethemes',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeTheme: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
})

export const { changeTheme } = changethemesSlice.actions

export default changethemesSlice.reducer