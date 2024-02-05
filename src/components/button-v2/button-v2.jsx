import React from 'react';
import { classname } from 'utils';

import './button-v2.scss';

const cn = classname('buttonv2');

export const ButtonV2 = props => {
    const { children, type = 'button', disabled, view = 'filled', size = 'sm', className } = props;

    return (
        <div className={cn({ view, size }, [className])} type={type} disabled={disabled}>
            <div className='icon-start'></div> {children} <div className='icon-end'></div>
        </div>
    );
};
