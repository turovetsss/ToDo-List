import React, { useMemo } from 'react';
import { classname } from 'utils';

import './table-cell.scss';

const cn = classname('cell');

export const TableCell = ({ data, type }) => {
    const content = useMemo(() => {
        if (type === 0) {
            return (
                <div>
                    <input type='checkbox' />
                    <img src='' alt='img' />
                </div>
            );
        }
        if (type === 1) {
            return (
                <div>
                    <input type='text'></input>
                </div>
            );
        }
    }, [type]);

    return (
        <td className={`${cn()} ${type === 0 ? 'type0' : type === 1 ? 'type-1' : ''}`}>
            {content}
            {data}
        </td>
    );
};
