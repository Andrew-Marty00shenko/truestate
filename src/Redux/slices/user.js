import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { t } from "i18next";
import { toast } from "react-toastify";

import userAPI from "../../API/userAPI";
import userDataAPI from "../../API/userDataAPI";

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
                    toast.error(t('registration:REGISTRATION_ERROR_RESPONSE'));
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
    async (data) => {
        const response = await userAPI.login(data)
            .then(res => {
                if (res.data.error) {
                    toast.error(t('login:LOGIN_ERROR'));
                } else {
                    toast.success(t('login:LOGIN_SUCCESS'));
                    window.axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
                    window.localStorage['access_token'] = res.data.access_token;
                    return res.data;
                }
            })
            .catch(err => {
                toast.error(t('login:LOGIN_ERROR'))
            });
        return response;
    }
);

export const getUserProfile = createAsyncThunk(
    'user/profile',
    async () => {
        const response = await userDataAPI.getUserProfile()
            .then(res => {
                return res.data;
            });

        return response;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("access_token");
            state.isAuth = false;
        }
    },
    extraReducers: builder => {
        builder.addCase(loginUser.pending, state => {
            state.loading = true;
            state.isAuth = false;
        });
        builder.addCase(registerUser.pending, state => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload?.access_token) {
                state.isAuth = true;
            } else {
                state.isAuth = false;
            }
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(getUserProfile.fulfilled, (state, action) => {
            state.user = action.payload;
        })
        builder.addCase(loginUser.rejected, state => {
            state.loading = false;
            state.isAuth = false;
        });
        builder.addCase(registerUser.rejected, state => {
            state.loading = false;
        });
        builder.addCase(getUserProfile.rejected, state => {
            state.user = null;
        })
    }
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;