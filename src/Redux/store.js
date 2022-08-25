import { configureStore } from '@reduxjs/toolkit'
import checkingResidentOfUsaReducer from './slices/checkingResidentOfUsa';

export const store = configureStore({
    reducer: {
        checkingResidentOfUsa: checkingResidentOfUsaReducer,
    },
});