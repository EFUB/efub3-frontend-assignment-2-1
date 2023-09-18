import { createSlice } from "@reduxjs/toolkit";

export const selectSlice = createSlice({
	name: "selectSlice",
	initialState: { selectedId: [] },
	reducers: {
		addSelect: (state, action) => {
			if (typeof action.payload === "number")
				state.selectedId.push(action.payload);
		},
		removeSelect: (state, action) => {
			if (typeof action.payload === "number")
				state.selectedId = state.selectedId.filter(
					(item) => item !== action.payload
				);
		},
		clearSelect: (state, action) => {
			state.selectedId = [];
		},
	},
});

export const { addSelect, removeSelect, clearSelect } = selectSlice.actions;
