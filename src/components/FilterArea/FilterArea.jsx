import React, { useState } from 'react';
import './FilterArea.css';
import Radio from '@mui/joy/Radio';
import { useSelector } from 'react-redux';
import { changeFilter } from '../../features/filterSlice.js';
import { useDispatch } from 'react-redux';

function FilterArea() {
    const filter = useSelector((state) => state.filterBy.filter);

    const dispatch = useDispatch();

    const handleChange = (value) => {
        dispatch(changeFilter(value));
    }

    return (
        <div className='main-filter'>
            <Radio className='radio-button' checked={filter === 'all'} onClick={() => handleChange('all')} value='all' label='All' sx={{marginTop: 0}}/>
            <Radio className='radio-button' checked={filter === 'completed'} onClick={() => handleChange('completed')} value='completed' label='Completed' sx={{marginTop: 0}}/>
            <Radio className='radio-button' checked={filter === 'pending'} onClick={() => handleChange('pending')} value='pending' label='Pending' sx={{marginTop: 0}}/>
        </div>
    )
};

export default FilterArea;