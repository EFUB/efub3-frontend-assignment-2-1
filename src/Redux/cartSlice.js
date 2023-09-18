import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      // 장바구니 아이템 추가 또는 수량 증가
      const existingItem = state.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({
          img: action.payload.img,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1, // 처음 아이템을 추가할 때 수량을 1로 설정
        });
      }
    },
    removeItem: (state, action) => {
      // 장바구니 아이템 수량 감소 또는 제거
      const existingItem = state.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // 수량이 1보다 큰 경우에만 감소
        } else {
          // 수량이 1인 경우 아이템 제거
          const indexToRemove = state.findIndex(
            (item) => item.name === action.payload.name
          );
          if (indexToRemove !== -1) {
            state.splice(indexToRemove, 1);
          }
        }
      }
    },
    deleteItem: (state, action) => {
      // 아이템 삭제
      const indexToRemove = state.findIndex(
        (item) => item.name === action.payload.name
      );
      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
    },
  },
});

export default cartSlice;

export const { addItem, removeItem, deleteItem } = cartSlice.actions;
