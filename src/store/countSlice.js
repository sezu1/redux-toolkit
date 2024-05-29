import {createSlice} from '@reduxjs/toolkit';

const countSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },

    reducers: {
        changeToIncrement: (state, action) => {
            state.count = state.count + 1;
        },
        changeToDecrement: (state, action) => {
            state.count = state.count - 1;
        }
    }
})


export const {
    changeToIncrement,
    changeToDecrement
             } = countSlice.actions;

export default countSlice.reducer;