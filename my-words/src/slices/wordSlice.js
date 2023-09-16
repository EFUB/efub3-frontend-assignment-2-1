import { createSlice } from "@reduxjs/toolkit";

// 단어 추가 & 삭제 기능
const wordSlice = createSlice({
  name: "wordSlice",
  initialState: {
    list: [
      {
        word: "Fragile",
        def: "취약한, 허술한",
        ex: "The economy remains extremely fragile.",
        myexp: "도자기는 깨지기 쉬우니까 fragile 하다고 볼 수 있다.",
      },
      {
        word: "Deteriorate",
        def: "악화되다",
        ex: "Her health deteriorated rapidly, and she died shortly afterwards",
        myexp: "사탕을 자주 먹으면 치아가 빠르게 deteriorate 된다.",
      },
    ],
  },
  reducers: {
    addWord: (state, action) => {
      return { ...state, list: [...state.list, action.payload] };
    },
    deleteWord: (state, action) => {
      const newList = state.list.filter((word, index) => {
        return action.payload.idx !== index;
      });
      return {
        ...state,
        list: newList,
      };
    },
  },
});

export default wordSlice;

export const { addWord } = wordSlice.actions;
export const { deleteWord } = wordSlice.actions;
