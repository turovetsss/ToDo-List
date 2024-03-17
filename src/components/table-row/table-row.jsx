import React from 'react';
import { TableCell } from 'components/table-cell';
import { tbodyData } from 'components/table-cell/data';
import { classname } from 'utils';

import './table-row.scss';

const cn = classname('line');

export const TableRow = ({ data }) => {
    return (
        <tr>
            {data.map((item, index) => {
                return <TableCell key={index} data={item} type={index} />;
            })}
        </tr>
    );
};
