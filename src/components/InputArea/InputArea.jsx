import React, { useState } from 'react';
import './InputArea.css';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import { addToDo } from '../../features/toDoListSlice.js';
import { useDispatch } from 'react-redux';

function InputArea() {
    const [newToDo, setNewToDo] = useState('');

    const dispatch = useDispatch();

    const handleAddToDo = () => {
        if (newToDo) {
            dispatch(addToDo(newToDo));
            setNewToDo('');
        }
    }

    return (
        <div>
            <div className='input-container'>
                <Input onChange={(e) => setNewToDo(e.target.value)} value={newToDo} placeholder='Type in here...' variant='plain' sx={{width: 300}}/>
                <Button onClick={handleAddToDo} startDecorator={<Add />} variant='plain' color='neutral'>Add</Button>
            </div>
        </div>
    )
};

export default InputArea;