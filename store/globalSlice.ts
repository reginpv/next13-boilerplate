import { createSlice } from "@reduxjs/toolkit"

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    global: {
      test: true
    }
  },
  // Actions
  reducers: {
    setGlobal: (state, action) => {
      state.global = action.payload
    },
  }
})

// Action creators
export const { setGlobal } = globalSlice.actions

export default globalSlice.reducer
