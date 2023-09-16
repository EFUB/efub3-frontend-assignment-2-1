import { createSlice } from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
  name: "shopping",
  initialState: { number: [] },
  reducers: {
    // 카트에 추가하는 리듀서
    putCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.number.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.count += newItem.count;
      } else {
        state.number.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          count: newItem.count,
        });
      }
    },
    // 카트에서 삭제하는 리듀서
    removeCart: (state, action) => {
      const id = action.payload;
      state.number = state.number.filter((item) => item.id !== id);
    },
  },
});

export default shoppingSlice;

export const { putCart, removeCart } = shoppingSlice.actions;
