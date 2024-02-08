import React from 'react';
import { classname } from 'utils';

import './button-v2.scss';

const cn = classname('buttonv2');

export const ButtonV2 = props => {
    const { children, type = 'button', disabled, view = 'filled', size = 'sm', className } = props;

    return (
        <div className={cn({ view, size }, [className])} type={type} disabled={disabled}>
            <div className='icon-start'>
                <svg width='20' height='20'>
                    <circle
                        className='circle-start'
                        r='8'
                        cx='10'
                        cy='10'
                        fill='transparent'
                        stroke='transparent'
                        strokeWidth='0.1rem'
                        strokeDasharray='439.8'
                        strokeDashoffset='0'
                    ></circle>
                </svg>
            </div>
            {children}{' '}
            <div className='icon-end'>
                <svg width='20' height='20'>
                    <circle
                        className='circle-end'
                        r='8'
                        cx='10'
                        cy='10'
                        fill='transparent'
                        stroke='transparent'
                        strokeWidth='0.1rem'
                        strokeDasharray='439.8'
                        strokeDashoffset='0'
                    ></circle>
                </svg>
            </div>
        </div>
    );
};
