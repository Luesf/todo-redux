import React from 'react';
import './ToDoList.css';
import IconButton from '@mui/joy/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useSelector } from 'react-redux';
import { toggleToDo } from '../../features/toDoListSlice.js';
import { deleteToDo } from '../../features/toDoListSlice.js';
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

    const handleDelete = (id) => {
        dispatch(deleteToDo(id));
    }

    return (
        <div className='main-list'>
            <div className='list-container'>
                <div className='list-text'>
                    <ul>
                        {filteredList.map((todo) => {return <li onClick={() => handleToggleToDo(todo.id)} key={todo.id} ><p className={todo.completed ? 'strike task' : 'task'}>{todo.text}</p><p className='time'>{todo.time}</p><IconButton type='submit' size='sm' variant='plain' color='danger' onClick={() => handleDelete(todo.id)}><DeleteOutlinedIcon/></IconButton></li>})}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default ToDoList;