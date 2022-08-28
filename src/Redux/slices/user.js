import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: window.localStorage.token,
    isAuth: !!window.localStorage.token,
    loading: false
};

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
    },
    // extraReducers: builder => {
    //     builder.addCase(fetchUser.fulfilled, (state, action) => {
    //         state.loading = false;
    //         state.user = action.payload;
    //     });
    //     builder.addCase(fetchUser.pending, state => {
    //         state.loading = true;
    //     });
    //     builder.addCase(fetchUser.rejected, (state, action) => {
    //         state.loading = false;
    //         state.error = action.payload;
    //     });
    // }
});

export const { login } = userSlice.actions;

export default userSlice.reducer;