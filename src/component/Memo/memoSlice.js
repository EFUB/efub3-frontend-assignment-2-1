import { createSlice } from "@reduxjs/toolkit";

const memoSlice = createSlice({
  name: "memo",
  initialState: { memos: [] },
  reducers: {
    addMemo: (state, action) => {
      const newMemo = action.payload;
      const id = Math.floor(Math.random() * 100000);
      const now = new Date();
      const date = now.toLocaleString();

      state.memos.push({
        id: id,
        memo: newMemo,
        date: date,
      });
    },
    removeMemo: (state, action) => {
      const id = action.payload;
      state.memos = state.memos.filter((memo) => memo.id !== id);
    },
  },
});

export default memoSlice;

export const { addMemo, removeMemo } = memoSlice.actions;
