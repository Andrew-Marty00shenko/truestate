import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false
};

export const callMeBackSlice = createSlice({
    name: 'callMeBack',
    initialState,
    reducers: {
        opened: (state) => {
            state.value = true
        },
        closed: (state) => {
            state.value = false
        }
    }
});

export const { opened, closed } = callMeBackSlice.actions;

export default callMeBackSlice.reducer;