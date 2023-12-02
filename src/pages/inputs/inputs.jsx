import React from 'react';
import { Input } from 'components';

import './input.scss';

export const InputsPage = () => {
    return (
        <>
            <h4>filled</h4>
            <div className='inputs-container'>
                <Input view='filled' className='input--normal' />
                <Input view='filled' className='input--focus' />
                <Input view='filled' className='input--hover' />
                <Input view='filled' invalid={true} className='input--error' />
                <Input view='filled' disabled={true} />
            </div>
            <h4>Outlined</h4>
            <div className='inputs-container'>
                <Input view='outlined' className='input--normal' />
                <Input view='outlined' className='input--focus' />
                <Input view='outlined' className='input--hover' />
                <Input view='outlined' invalid={true} className='input--error' />
                <Input view='outlined' disabled={true} />
            </div>
            <h4>None</h4>
            <div className='inputs-container'>
                <Input view='none' className='input--normal' />
                <Input view='none' className='input--focus' />
                <Input view='none' className='input--hover' />
                <Input view='none' invalid={true} className='input--error' />
                <Input view='none' disabled={true} />
            </div>
            <h4>Search input</h4>
            <div className='inputs-container'>
                <Input view='search' className='input--normal' />
                <Input view='search' className='input--focus' />
                <Input view='search' className='input--hover' />
                <Input view='search' invalid={true} className='input--error' />
                <Input view='search' disabled={true} />
            </div>
        </>
    );
};
