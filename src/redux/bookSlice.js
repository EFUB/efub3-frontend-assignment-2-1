import {createSlice} from '@reduxjs/toolkit'


const bookSlice = createSlice({
    name: 'bookSlice',
    initialState: [],
    reducers: {
      createBook: (state, action) => {
        state.unshift(action.payload);
      },
      deleteBook: (state, action) => {
        const { targetId } = action.payload;
        return state.filter((it) => it.id !== targetId);
      },
    },
});
    
export default bookSlice;

export const {createBook} = bookSlice.actions;
export const {deleteBook} = bookSlice.actions;