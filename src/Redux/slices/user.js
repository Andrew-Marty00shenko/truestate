import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { t } from "i18next";
import { toast } from "react-toastify";

import userAPI from "../../API/userAPI";

const initialState = {
    user: null,
    isAuth: !!window.localStorage.access_token,
    loading: false
};

export const registerUser = createAsyncThunk(
    'user/registration',
    async data => {
        const response = await userAPI.registration(data)
            .then(res => {
                if (res.data.error) {
                    toast.error(t('registration:REGISTRATION_ERROR_RESPONSE'), { autoClose: 50000 });
                } else {
                    toast.success(t('registration:REGISTRATION_NOTIFICATION'));
                    return res.data;
                }
            })
            .catch(err => {
                toast.error(t('registration:REGISTRATION_ERROR_RESPONSE'))
            });
        return response;
    }
);

export const loginUser = createAsyncThunk(
    'user/login',
    async (data, thunkAPI) => {
        const response = await userAPI.login(data)
            .then(res => {
                if (res.data.error) {
                    toast.error(t('login:LOGIN_ERROR'));
                } else {
                    toast.success(t('login:LOGIN_SUCCESS'));
                    window.axios.defaults.headers.common['access_token'] = res.data.access_token;
                    window.localStorage['access_token'] = res.data.access_token;
                    // thunkAPI.dispatch()
                    return res.data;
                }
            })
            .catch(err => {
                toast.error(t('login:LOGIN_ERROR'))
            });
        return response;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loginUser.pending, state => {
            state.loading = true;
            state.isAuth = false;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload?.access_token) {
                state.isAuth = true;
            } else {
                state.isAuth = false;
            }
        });
        builder.addCase(loginUser.rejected, state => {
            state.loading = false;
            state.isAuth = false;
        });
    }
});

export default userSlice.reducer;