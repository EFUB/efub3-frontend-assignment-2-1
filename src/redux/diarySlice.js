import { createSlice } from "@reduxjs/toolkit";

export const diarySlice = createSlice({
  name: "diarySlice",
  initialState: { title: "", content: "" },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { setTitle, setContent } = diarySlice.actions;
