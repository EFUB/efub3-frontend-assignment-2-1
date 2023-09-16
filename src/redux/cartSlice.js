import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      // 기존 목록에 해당 아이템이 있는지 확인
      const foundItem = state.find((item) => item.id === action.payload.id);
      console.log(foundItem);
      if (foundItem) {
        // 있으면 수량만 증가
        foundItem.quantity += 1;
      } else {
        // 없으면 목록에 아이템 추가
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    subtractItem: (state, action) => {
      // 기존 목록에 해당 아이템이 있는지 확인
      const foundItem = state.find((item) => item.id === action.payload.id);
      // 아이템 수량 감소 로직
      if (foundItem) {
        if (foundItem.quantity > 1) {
          // 수량이 2개 이상일 경우 수량만 감소
          foundItem.quantity -= 1;
        } else {
          // 수량이 1개일 경우 alert
          alert("상품 수량은 최소 1개 이상이어야 합니다. 상품을 삭제해주세요.");
        }
      }
    },
    deleteItem: (state, action) => {
      // 아이템 삭제 로직
      const itemIdToRemove = action.payload;
      return state.filter((item) => item.id !== itemIdToRemove);
    },
  },
});

export const { addItem, subtractItem, deleteItem } = cartSlice.actions;

export default cartSlice;
