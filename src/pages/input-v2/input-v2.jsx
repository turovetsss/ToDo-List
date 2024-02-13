import React from 'react';
import { InputV2 } from 'components';

import './input-v2.scss';

export const InputsPage2 = () => {
    return (
        <>
            <h4>filled</h4>
            <div className='inputs-container'>
                <InputV2 view='filled' className='input--normal' />
                <InputV2 view='filled' className='input--focus' />
                <InputV2 view='filled' className='input--hover' />
                <InputV2 view='filled' invalid={true} className='input--error' />
                <InputV2 view='filled' disabled={true} />
            </div>
            <h4>Outlined</h4>
            <div className='inputs-container'>
                <InputV2 view='outlined' className='input--normal' />
                <InputV2 view='outlined' className='input--focus' />
                <InputV2 view='outlined' className='input--hover' />
                <InputV2 view='outlined' invalid={true} className='input--error' />
                <InputV2 view='outlined' disabled={true} />
            </div>
        </>
    );
};
