import React from 'react';
import down from 'pages/img/arrow-down.png';
import help from 'pages/img/Help-icon.png';
import { classname } from 'utils';

import { tableData } from './data';

import './table.scss';

const cn = classname('table');

export const Table = () => {
    return (
        <table className={cn()}>
            <thead>
                <tr className={cn('header')}>
                    <th>
                        <input type='checkbox' /> <p>Name</p>
                    </th>
                    <th>
                        <p>Status</p>
                        <img src={down} alt='' />
                    </th>
                    <th>
                        <p>Role</p> <img src={help} alt='' />
                    </th>
                    <th>
                        <p>Email address</p>
                    </th>
                    <th>
                        <p>Team</p>
                    </th>
                    <th>
                        <th></th>
                    </th>
                </tr>
            </thead>
            <tbody>
                {tableData.map(row => (
                    <tr className={cn('line')} key={row.id}>
                        <td>
                            <input type='checkbox' /> <img src={row.image} alt='' />
                            <a>
                                {row.name}

                                {row.login}
                            </a>
                        </td>
                        <td>
                            <span>{row.status}</span>
                        </td>
                        <td>
                            <div>
                                <p>{row.role}</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>{row.email}</p>
                            </div>
                        </td>
                        <td className={cn('line__cell')}>
                            <div className={cn('line__cell-team')}>
                                <div className={cn('line__cell-team-first')}>{row.team[0]}</div>
                                <div className={cn('line__cell-team-second')}>{row.team[1]}</div>
                                <div className={cn('line__cell-team-third')}>{row.team[2]}</div>
                                <div className={cn('line__cell-team-etc')}>{row.team[3]}</div>
                            </div>
                        </td>
                        <td className={cn('line__cell')}>
                            <div className={cn('line__cell-edit')}></div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
