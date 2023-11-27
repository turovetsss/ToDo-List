import React from 'react';
import { Input } from 'components';

import './input.scss';

export const InputsPage = () => {
    return (
        <>
            <hd>filled</hd>
            <div className='inputs-container'>
                <Input view='filled' />
                <Input view='filled' className='input--focus' />
                <Input view='filled' className='input--hover' />
                <Input view='filled' invalid={true} />
                <Input view='filled' disabled={true} />
            </div>
            <h4>Outlined</h4>
            <div className='inputs-container dark-theme'>
                <Input view='outlined' />
                <Input view='outlined' className='input--focus' />
                <Input view='outlined' className='input--hover' />
                <Input view='outlined' invalid={true} />
                <Input view='outlined' disabled={true} />
            </div>
            <div className='inputs-container dark-theme'>
                <Input view='filled' />
                <Input view='filled' className='input--focus' />
                <Input view='filled' className='input--hover' />
                <Input view='filled' invalid={true} />
                <Input view='filled' disabled={true} />
            </div>
        </>
    );
};
