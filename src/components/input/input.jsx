import React, { useMemo } from 'react';

import './input.scss';

export const Input = props => {
    const { type = 'input', disabled, view = 'filled', size = 'm' } = props;

    const className = useMemo(() => ['input', `input--${view}`, `input--size-${size}`, props.className].join(' '), [props.className, size, view]);

    return (
        <div className='input'>
            <input className={className} type={type} disabled={disabled} placeholder='label' />
            <label className=''>Label</label>
            <div></div>
            <span>Label</span>
        </div>
    );
};
