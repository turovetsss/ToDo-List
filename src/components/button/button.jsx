import React from 'react';
import { classname } from 'utils';

import './button.scss';

const cn = classname('button');

export const Button = props => {
    const { children, type = 'button', disabled, view = 'filled', size = 'm', className } = props;

    return (
        <button className={cn({ view, size }, [className])} type={type} disabled={disabled}>
            {children}
        </button>
    );
};
