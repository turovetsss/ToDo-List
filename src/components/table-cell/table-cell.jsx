import React, { useMemo } from 'react';
import avatar from 'assets/img/Avatar.png';
import edit from 'assets/img/edit-2.png';
import trash from 'assets/img/trash.png';
import { classname } from 'utils';

import './table-cell.scss';

const cn = classname('cell');
const TableCellTypes = {
    CHECKBOX: 0,
    TEXT: 1,
    TEAM: 2,
    EDIT: 8,
};
const TableCellClasses = {
    0: 'name',
    1: 'status',
    4: 'team-desigh',
    5: 'team-product',
    6: 'team-marketing',
    7: 'team-etc',
    8: 'edit',
};
const TableCellComponents = {
    [TableCellTypes.CHECKBOX]: () => (
        <div>
            <input type='checkbox' />
            <img src={avatar} alt='img' />
        </div>
    ),
    [TableCellTypes.TEXT]: () => <div></div>,
    [TableCellTypes.TEAM]: () => <div></div>,
    [TableCellTypes.EDIT]: () => (
        <div>
            <img src={edit} alt='img' />
            <img src={trash} alt='img' />
        </div>
    ),
};

export const TableCell = ({ data, type }) => {
    const ContentComponent = useMemo(() => TableCellComponents[type], [type]);
    const cellClassName = useMemo(() => TableCellClasses[type], [type]);

    return (
        <td className={cn()}>
            <div className={`${cn()} ${cellClassName}`}>
                {ContentComponent && <ContentComponent />}
                {data}
            </div>
        </td>
    );
};
