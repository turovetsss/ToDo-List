import React from 'react';
import { classname } from 'utils';

import './button-v2.scss';

const cn = classname('buttonv2');

export const ButtonV2 = props => {
    const { children, type = 'button', disabled, view = 'filled', size = 'sm', className } = props;

    return (
        <button className={cn({ view, size }, [className])} type={type} disabled={disabled}>
            {children}
        </button>
    );
};
