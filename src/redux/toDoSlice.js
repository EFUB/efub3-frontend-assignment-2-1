import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "toDoSlice",
  initialState: [],
  reducers: {
    // 할 일 추가
    add: (state, action) => {
      state.push({
        text: action.payload,
        isCompleted: false,
      });
    },
    // 할 일 삭제
    remove: (state, action) => {
      return state.filter((item, index) => index !== action.payload);
    },
    // 할 일 완료
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
