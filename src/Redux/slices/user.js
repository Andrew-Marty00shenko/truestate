import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { t } from "i18next";
import { toast } from "react-toastify";

import userAPI from "../../API/userAPI";

const initialState = {
    user: null,
    isAuth: !!window.localStorage.token,
    loading: false
};

export const registerUser = createAsyncThunk(
    'user/registration',
    async data => {
        const response = await userAPI.registration(data)
            .then(res => {
                toast.success(t('registration:REGISTRATION_NOTIFICATION'));
                return res.data;
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
                toast.error(t('login:LOGIN_SUCCESS'));
                window.axios.defaults.headers.common['access_token'] = res.data.access_token;
                window.localStorage['access_token'] = res.data.access_token;
                // thunkAPI.dispatch()
                return res.data;
            })
            .catch(err => {
                toast.error(t('login:LOGIN_ERROR'))
            });
        return response;
    }
)

// export const fetchUser = createAsyncThunk(
//     'user/fetchUser',
//     async () => {
//         const data = await userApi
//             .getUser()
//             .then(res => {
//                 res.data
//             })
//             .catch(err => {
//                 console.log(err);
//             });

//         return data;
//     }
// );

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
            state.isAuth = false;
        });
        builder.addCase(loginUser.rejected, state => {
            state.loading = false;
            state.isAuth = false;
        });
    }
});

export default userSlice.reducer;