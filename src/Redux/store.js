import { configureStore } from '@reduxjs/toolkit'
import checkingResidentOfUsaReducer from './slices/checkingResidentOfUsa';
import userReducer from "./slices/user";

export const store = configureStore({
    reducer: {
        checkingResidentOfUsa: checkingResidentOfUsaReducer,
        user: userReducer
    },
});