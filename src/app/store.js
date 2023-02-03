import { configureStore } from "@reduxjs/toolkit";
// import { useReducer } from "../features/counter/userSlice";//
import { userSlice } from "../features/userSlice";
// import {userReducer} from '../features/userSlice.reducer'
// import userReducer from './userSlice.reducer';

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,

    }
})