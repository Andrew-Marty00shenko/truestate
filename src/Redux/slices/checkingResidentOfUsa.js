import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false
};

export const checkingResidentOfUsaSlice = createSlice({
    name: 'checkingResidentOfUsa',
    initialState,
    reducers: {
        clickYes: (state) => {
            state.value = true
        },
        clickNo: (state) => {
            console.log(state)
            state.value = false
        }
    }
});

export const { clickYes, clickNo } = checkingResidentOfUsaSlice.actions;

export default checkingResidentOfUsaSlice.reducer;