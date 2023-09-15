import { createSlice } from "@reduxjs/toolkit";

// 메뉴 옵션 선택
const optionSlice = createSlice({
  name: "optionSlice",
  initialState: { value: "popular" },
  reducers: {
    select: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default optionSlice;
