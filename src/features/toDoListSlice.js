import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
};

const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState: initialState,
    reducers: {
        addToDo: (state, action) => {
            const newId = state.list.length ? state.list[state.list.length - 1].id + 1 : 1;
            const newToDo = {id: newId, text: action.payload, completed: false, time: new Date().toLocaleString()};
            state.list.push(newToDo)
        },
        toggleToDo: (state, action) => {
            const matchToDo = state.list.find(todo => todo.id === action.payload);
            if (matchToDo) {
                matchToDo.completed = !matchToDo.completed
            };
        },
        deleteToDo: (state, action) => {
            const index = state.list.findIndex(todo => todo.id === action.payload);
            if (index !== -1) {
                state.list.splice(index, 1);
            };
        }
}});

export const { addToDo, toggleToDo, deleteToDo } = toDoListSlice.actions;
export default toDoListSlice.reducer;