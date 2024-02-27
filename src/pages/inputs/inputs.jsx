import React from 'react';
import { Input } from 'components';

import './input.scss';

export const InputsPage = () => {
    return (
        <>
            <h4>filled</h4>
            <div className='inputs-container'>
                <Input view='filled' className='input--filled' />
                <Input view='filled' className='input--focus' />
                <Input view='filled' className='input--hover' />
                <Input view='filled' invalid={true} className='input--error' />
                <Input view='filled' disabled={true} />
            </div>
            <h4>Outlined</h4>
            <div className='inputs-container'>
                <Input view='filled' className='input--filled input--search input--cross' />
                <Input view='filled' className='input--focus input--search' />
                <Input view='filled' className='input--hover input--search' />
                <Input view='filled' invalid={true} className='input--error ' />
                <Input view='filled' disabled={true} />
            </div>
            <h4>None</h4>
            <div className='inputs-container'>
                <Input view='filled' className='input--normal  input--none' />
                <Input view='filled' className='input--focus  input--none' />
                <Input view='filled' className='input--hover  input--none' />
                <Input view='filled' invalid={true} className='input--error' />
                <Input view='filled' disabled={true} />
            </div>
            <h4>Search input</h4>
            <div className='inputs-container'>
                <Input view='filled' className='input--normal' />
                <Input view='filled' className='input--focus' />
                <Input view='filled' className='input--hover' />
                <Input view='filled' invalid={true} className='input--error' />
                <Input view='filled' disabled={true} />
            </div>
            <h4>With Border input</h4>
            <div className='inputs-container'>
                <Input view='border' className='input--view-border' />
                <Input view='border' className='input--focus' />
                <Input view='border' className='input--hover' />
                <Input view='border' invalid={true} className='border--error' />
                <Input view='border' disabled={true} className='input--disabled' />
            </div>
            <h4>Filled Border input</h4>
            <div className='inputs-container'>
                <Input view='border' className='input--search' />
                <Input view='border' className='input--focus input--search' />
                <Input view='border' className='input--hover input--search' />
                <Input view='border' invalid={true} className='input--error ' />
                <Input view='border' className='input--search' disabled={true} />
            </div>
            <h4>None Border input</h4>
            <div className='inputs-container'>
                <Input view='border' className='input--none' />
                <Input view='border' className='input--focus input--none' />
                <Input view='border' className='input--hover input--none' />
                <Input view='border' invalid={true} className='input--error' />
                <Input view='border' disabled={true} className='input--none' />
            </div>
            <h4>Search Border input</h4>
            <div className='inputs-container'>
                <Input view='border' className='input--border-normal input--search' />
                <Input view='border' className='input--focus input--search' />
                <Input view='border' className='input--hover input--search' />
                <Input view='border' invalid={true} className='input--error' />
                <Input view='border' className='input--search' disabled={true} />
            </div>
        </>
    );
};
