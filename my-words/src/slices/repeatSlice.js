import { createSlice } from "@reduxjs/toolkit";

// 반복횟수 관리
const repeatSlice = createSlice({
  name: "repeatSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    incrementCount: (state, action) => {
      state.count = state.count + action.payload;
    },
    resetCount: (state, action) => {
      state.count = 0;
    },
  },
});

export const { incrementCount, resetCount } = repeatSlice.actions;
export default repeatSlice;
