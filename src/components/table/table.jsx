import React from 'react';
import { TeamBlock } from 'components/team-block';
import { classname } from 'utils';

import { headerData, tableData } from './data';

import './table.scss';

const cn = classname('table');

export const Table = () => {
    return (
        <table className={cn()}>
            <thead>
                {headerData.map(row => (
                    <tr className={cn('header')} key={row.id}>
                        <th>
                            <input type='checkbox' />
                            <p>{row.name}</p>
                        </th>
                        <th>
                            <p>{row.status}</p>
                            <img src={row.statusImg} alt='' />
                        </th>
                        <th>
                            <p>{row.role}</p>
                            <img src={row.roleImg} alt='' />
                        </th>
                        <th>
                            <p>{row.email}</p>
                        </th>
                        <th>
                            <p>{row.team}</p>
                        </th>
                        <th>
                            <th></th>
                        </th>
                    </tr>
                ))}
            </thead>
            <tbody>
                {tableData.map(row => (
                    <tr className={cn('line')} key={row.id}>
                        <td>
                            <input type='checkbox' />
                            <img src={row.image} alt='' />
                            <p>{row.name}</p>
                        </td>
                        <td>
                            <span>{row.status}</span>
                        </td>
                        <td>
                            <p>{row.role}</p>
                        </td>
                        <td>
                            <p>{row.email}</p>
                        </td>
                        <td>
                            <TeamBlock />
                        </td>
                        <td>
                            <img src={row.edit} alt='' />
                            <img src={row.trash} alt='' />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
