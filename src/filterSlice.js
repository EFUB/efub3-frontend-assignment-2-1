// filterSlice.js
// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: { filter: "all" }, // 초기 필터 상태
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(anotherAction.type, (state, action) => {
  //     state.filter = "newFilterValue";
  //   });
  // },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
