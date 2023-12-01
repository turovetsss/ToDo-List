import React from 'react';
import { Input } from 'components';

import './input.scss';

export const InputsPage = () => {
    return (
        <>
            <h4>filled</h4>
            <div className='inputs-container'>
                <Input view='filled' />
                <Input view='filled' className='input--outlined_focus' />
                <Input view='filled' className='input--outlined_hover' />
                <Input view='filled' invalid={true} />
                <Input view='filled' disabled={true} />
            </div>
            <h4>Outlined</h4>
            <div className='inputs-container'>
                <Input view='outlined' />
                <Input view='outlined' className='input--outlined_focus' />
                <Input view='outlined' className='input--outlined_hover' />
                <Input view='outlined' invalid={true} />
                <Input view='outlined' disabled={true} />
            </div>
            <div className='inputs-container'>
                <Input view='filled' />
                <Input view='none' className='input--outlined_focus' />
                <Input view='none' className='input--outlined_hover' />
                <Input view='filled' invalid={true} />
                <Input view='filled' disabled={true} />
            </div>
        </>
    );
};
