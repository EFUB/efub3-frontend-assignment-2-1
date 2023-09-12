import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0, status: "Welcome" },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});

const asyncUpFetch = createAsyncThunk("counterSlice/asyncUpFetch", async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();
  return data.length;
});

export default counterSlice;
export const { up } = counterSlice.actions;
export { asyncUpFetch };
