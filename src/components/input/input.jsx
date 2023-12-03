import React, { useMemo } from 'react';

import './input.scss';

export const Input = props => {
    const { type = 'input', disabled, view = 'filled', invalid, name, value, onChange, hint } = props;

    const className = useMemo(() => ['input', `input--${view}`, invalid ? 'input--error' : '', props.className].join(' '), [invalid, props.className, view]);

    return (
        <div className={className}>
            <label className='input__label'>Label</label>
            <div className='input__left-addons'></div>
            <input className='input__control' type={type} disabled={disabled} placeholder='Placeholder' name={name} value={value} onChange={onChange} />
            <div className='input__right-addons'></div>
            {hint && <span className='input__hint'>{hint}</span>}
        </div>
    );
};
