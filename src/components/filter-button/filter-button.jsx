import React, { useCallback } from 'react';

import './filter-button.css';

export const FilterButton = props => {
    const { setFilter, name } = props;

    const onClickHandler = useCallback(() => setFilter(name), [name, setFilter]);

    return (
        <button type='button' className='btn toggle-btn' onClick={onClickHandler}>
            <span className='visually-hidden'>Show </span>
            <span>{name}</span>
            <span className='visually-hidden'> tasks</span>
        </button>
    );
};
