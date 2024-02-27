import React, { useMemo } from 'react';
import { classname } from 'utils';

import './input.scss';
const cn = classname('input');

export const Input = props => {
    const { type = 'input', disabled, view = 'filled', invalid, name, value, onChange, hint } = props;
    const className = useMemo(() => ['input', `input--${view}`, invalid ? 'input--error' : '', props.className].join(' '), [invalid, props.className, view]);

    return (
        <div className={className}>
            <label className={cn('label')}>Label</label>
            <div className={cn('left-addons')}></div>
            <input
                className={cn('control', { view })}
                type={type}
                disabled={disabled}
                placeholder='Placeholder'
                name={name}
                value={value}
                onChange={onChange}
            />
            <div className={cn('right-addons')}></div>
            {hint && <span className={cn('hint')}>{hint}</span>}
        </div>
    );
};
