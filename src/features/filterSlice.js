import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter: 'all'
};

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
})

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;