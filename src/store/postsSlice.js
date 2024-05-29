import {createSlice} from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },

    reducers: {
        addPost: (state, action) => {
            return{
                ...state,
                posts: [...state.posts, action.payload]
            }
        }
    }
})

export const {addPost} = postsSlice.actions;
export default postsSlice.reducer;