import React from 'react';
import { classname } from 'utils';

import { TeamData } from './data';

import './team-block.scss';
const cn = classname('team');

export const TeamBlock = () => {
    return (
        <>
            {TeamData.map(row => (
                <div className={cn()} key={row.id}>
                    <div className={cn('purple')}>{row.first}</div>
                    <div className={cn('cyan')}>{row.second}</div>
                    <div className={cn('blue')}>{row.third}</div>
                    <div className={cn('etc')}>{row.etc}</div>
                </div>
            ))}
        </>
    );
};
