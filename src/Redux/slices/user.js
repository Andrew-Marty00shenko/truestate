import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import userAPI from "../../API/userAPI";

const initialState = {
    user: null,
    token: window.localStorage.token,
    isAuth: !!window.localStorage.token,
    loading: false
};

export const registerUser = createAsyncThunk(
    'user/registration',
    async data => {
        const response = await userAPI.registration(data)
            .then(res => res.data)
            .catch(err => console.log(err));
        return response;
    }
);

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
    reducers: {
        login: (state) => {
            state.isAuth = true;
        }
    }
});

export const { login } = userSlice.actions;

export default userSlice.reducer;