import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './features/Todoslice';
const store = configureStore({
    reducer:{
        todos : todoReducer
    }
})
export default store;