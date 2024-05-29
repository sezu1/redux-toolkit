import {configureStore, combineReducers} from '@reduxjs/toolkit';
import countReducer from "./countSlice";
import postReducer from "./postsSlice";

const reducer = combineReducers({
    countReducer,
    postReducer
})

export const store = configureStore({
    reducer
})