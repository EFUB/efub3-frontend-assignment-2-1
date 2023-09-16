import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "colorSlice",
  initialState: { backgroundColor: "fff", btnColor: "#ffe699" },
  reducers: {
    // 배경색 지정
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    // 버튼색 지정
    setBtnColor: (state, action) => {
      state.btnColor = action.payload;
    },
  },
});

export default colorSlice;
export const { setBackgroundColor, setBtnColor } = colorSlice.actions;
