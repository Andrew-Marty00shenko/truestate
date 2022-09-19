import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { t } from "i18next";
import { toast } from 'react-toastify';

import callMeBackAPI from '../../API/callMeBackAPI';

const initialState = {
    value: false,
    isLoading: false
};

export const userRequest = createAsyncThunk(
    'user/request',
    async (data) => {
        const response = callMeBackAPI.request(data)
            .then(res => {
                toast.success(t('callMeBack:THANKS_FOR_CONTACTING'), {
                    className: "toast-modal",
                    autoClose: 3000,
                    progressClassName: 'toast-modal-progress'
                });
            })
            .catch(err => console.log(err));

        return response;
    }
);

export const callMeBackSlice = createSlice({
    name: 'callMeBack',
    initialState,
    reducers: {
        opened: (state) => {
            state.value = true;
        },
        closed: (state) => {
            state.value = false;
        }
    },
    extraReducers: builder => {
        builder.addCase(userRequest.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(userRequest.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(userRequest.rejected, state => {
            state.isLoading = false;
        });
    }
});

export const { opened, closed } = callMeBackSlice.actions;

export default callMeBackSlice.reducer;