import React from 'react';
import './ToDoList.css';
import { useSelector } from 'react-redux';
import { toggleToDo } from '../../features/toDoListSlice.js';
import { useDispatch } from 'react-redux';


function ToDoList() {
    const list = useSelector((state) => state.toDo.list);
    const filter = useSelector((state) => state.filterBy.filter);

    const dispatch = useDispatch();

    const handleToggleToDo = (id) => {
        dispatch(toggleToDo(id));      
    }

    const filteredList = list.filter((todo) => {
        if (filter === 'all') return true;
        if (filter === 'completed') return todo.completed;
        if (filter === 'pending') return !todo.completed;
        return true;
    })

    return (
        <div className='main-list'>
            <div className='list-container'>
                <div className='list-text'>
                    <ul>
                        {filteredList.map((todo) => {return  <li onClick={() => handleToggleToDo(todo.id)} key={todo.id} className={todo.completed ? 'strike' : ''}>{todo.text}</li>})}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default ToDoList;