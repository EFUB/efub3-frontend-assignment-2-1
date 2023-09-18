import { createSlice } from "@reduxjs/toolkit";

const modeChangerSlice = createSlice({
  name: "modeChangerSlice",
  initialState: { isDark: false },
  reducers: {
    //동기작업 리듀서
    light: (state) => {
      state.isDark = false;
    },
    dark: (state) => {
      state.isDark = true;
    },
  },
});

export default modeChangerSlice;

export const { light, dark } = modeChangerSlice.actions;
