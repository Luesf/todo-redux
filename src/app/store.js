import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from '../features/toDoListSlice.js';
import filterReducer from '../features/filterSlice.js';

export const store = configureStore({
    reducer: {
        toDo: toDoReducer,
        filterBy: filterReducer,
    }
});

