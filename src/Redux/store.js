import { configureStore } from '@reduxjs/toolkit'

import checkingResidentOfUsaReducer from './slices/checkingResidentOfUsa';
import callMeBack from './slices/callMeBack';
import userReducer from "./slices/user";

export const store = configureStore({
    reducer: {
        checkingResidentOfUsa: checkingResidentOfUsaReducer,
        callMeBack: callMeBack,
        user: userReducer
    },
});