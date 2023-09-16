import { createSlice } from "@reduxjs/toolkit";

const memoSlice = createSlice({
  name: "memo",
  initialState: { memos: [] },
  reducers: {
    // 메모장에 추가하는 리듀서
    addMemo: (state, action) => {
      const newMemo = action.payload;

      // id 프로퍼티 난수로 설정
      const id = Math.floor(Math.random() * 100000);

      // date 프로퍼티
      const now = new Date();
      const date = now.toLocaleString();

      state.memos.push({
        id: id,
        memo: newMemo,
        date: date,
      });
    },
    // 메모장에서 삭제하는 리듀서
    removeMemo: (state, action) => {
      const id = action.payload;
      state.memos = state.memos.filter((memo) => memo.id !== id);
    },
  },
});

export default memoSlice;

export const { addMemo, removeMemo } = memoSlice.actions;
