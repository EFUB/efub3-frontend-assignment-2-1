import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const asyncGetUsers = createAsyncThunk(
	"userSlice/asyncGetUsers",
	async (page) => {
		const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
		return res.data.data;
	}
);

export const userSlice = createSlice({
	name: "userSlice",
	initialState: { status: "initial", data: [] },
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(asyncGetUsers.pending, (state, action) => {
			return {
				...state,
				status: "loading",
				data: [],
			};
		});
		builder.addCase(asyncGetUsers.fulfilled, (state, action) => {
			return {
				...state,
				status: "success",
				data: action.payload,
			};
		});
		builder.addCase(asyncGetUsers.rejected, (state, action) => {
			return {
				...state,
				status: "failed",
				data: [],
			};
		});
	},
});

export const {} = userSlice.actions;
