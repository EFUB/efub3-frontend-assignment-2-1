import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "likeSlice",
  initialState: [],
  reducers: {
    likeItem: (state, action) => {
      // 좋아요 목록에 아이템을 추가하는 로직
      state.push(action.payload);
    },
    unLikeItem: (state, action) => {
      // 좋아요 목록에서 아이템을 제거하는 로직
      const itemIdToRemove = action.payload;
      return state.filter(item => item.id !== itemIdToRemove);
    },
  },
});

export const { likeItem, unLikeItem } = likeSlice.actions;

export default likeSlice;