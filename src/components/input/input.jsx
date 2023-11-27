import React, { useMemo } from 'react';

import './input.scss';

export const Input = props => {
    const { type = 'input', disabled, view = 'filled', invalid } = props;

    const className = useMemo(() => ['input', `input--${view}`, invalid ? 'input--invalid' : '', props.className].join(' '), [invalid, props.className, view]);

    return (
        <div className={className}>
            <label className='input__label'>Label</label>
            <input className='input__control' type={type} disabled={disabled} placeholder='label' />
            <div className='input__right-addons'>✓</div>
            <span className='input__hint'>Hint</span>
        </div>
    );
};
