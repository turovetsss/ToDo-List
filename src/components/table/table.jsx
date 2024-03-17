import React from 'react';
import { TableHead } from 'components/table-head';
import { TableRow } from 'components/table-row';
import { classname } from 'utils';
const cn = classname('table');

import './table.scss';

export const Table = ({ theadData, tbodyData, customClass }) => {
    return (
        <table className={cn()}>
            <thead>
                <tr>
                    {theadData.map(h => {
                        return <TableHead key={h} item={h} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map(item => {
                    return <TableRow key={item.id} data={item.items} />;
                })}
            </tbody>
        </table>
    );
};
