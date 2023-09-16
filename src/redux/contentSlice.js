import {createSlice} from '@reduxjs/toolkit'


const contentSlice = createSlice({
    name: 'contentSlice',
    initialState: '',
    reducers: {
      createContent: (state, action) => {
        const { content } = action.payload;
        state.content = content;
      },
      
    },
});
    
export default contentSlice;

export const {createContent} = contentSlice.actions;
