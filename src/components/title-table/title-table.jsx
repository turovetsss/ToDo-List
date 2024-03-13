import React from 'react';
import { classname } from 'utils';

import './title-table.scss';
const cn = classname('title');

export const TableTitle = () => {
    return (
        <div className={cn()}>
            <h1>Team Members</h1>
            <span>100 user</span>
            <p></p>
        </div>
    );
};
