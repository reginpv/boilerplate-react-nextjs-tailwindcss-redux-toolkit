import { createSlice } from "@reduxjs/toolkit"

export const testSlice = createSlice({
  name: "test",
  initialState: {
    test: true,
  },
  // Actions
  reducers: {
    setTest: (state, action) => {
      state.test = action.payload
    },
  }
})

// Action creators
export const { setTest } = testSlice.actions

export default testSlice.reducer