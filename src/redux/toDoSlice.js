import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "toDoSlice",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({
        text: action.payload,
        isCompleted: false,
      });
    },
    remove: (state, action) => {
      return state.filter((item, index) => index !== action.payload);
    },
    complete: (state, action) => {
      return state.map((item, index) =>
        index === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    },
  },
});

export default toDoSlice;
export const { add, remove, complete } = toDoSlice.actions;
