import React from 'react';
import { Input } from 'components';

import './input.scss';

export const InputsPage = () => {
    return (
        <div className='inputs-container'>
            <Input view='filled' />
            <Input view='filled' className='input--filled-focus' />
            <Input view='filled' className='input--filled-hover' />
            <Input view='filled' className='input--filled-invalid' />
            <Input disabled={true} />
        </div>
    );
};
