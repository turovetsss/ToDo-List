import React from 'react';
import down from 'pages/img/arrow-down.png';
import help from 'pages/img/Help-icon.png';
import { classname } from 'utils';

import './table.scss';
const data = [
    {ы
        id: 1,
        name: 'Olivia Rhye',
        login: '@olivia',
        status: 'Active',
        role: 'Product Designer',
        email: 'olivia@untitledui.com',
        team: ['Design', 'Product', 'Marketing', '+4'],
    },
    {
        id: 2,
        name: 'Olivia Rhye',
        login: '@olivia',
        status: 'Active',
        role: 'Product Designer',
        email: 'olivia@untitledui.com',
        team: ['Design', 'Product', 'Marketing', '+4'],
    },
];
const cn = classname('table');

export const Table = () => {
    return (
        <table className={cn()}>
            <thead>
                <tr className={cn('header')}>
                    <div className={cn('header__row')}>
                        <th className={cn('header__row-name')}>
                            <input type='checkbox' />
                            <p>Name</p>
                        </th>
                    </div>
                    <div className={cn('header__row')}>
                        <th className={cn('header__row-status')}>
                            <p>Status</p>
                            <img src={down} alt='' />
                        </th>
                    </div>
                    <div className={cn('header__row')}>
                        <th className={cn('header__row-role')}>
                            <p>Role</p>
                            <img src={help} alt='' />
                        </th>
                    </div>
                    <div className={cn('header__row')}>
                        <th className={cn('header__row-email')}>
                            <p>Email address</p>
                        </th>
                    </div>
                    <div className={cn('header__row')}>
                        <th className={cn('header__row-team')}>
                            <p>Team</p>
                        </th>
                    </div>
                    <div className={cn('header__row')}>
                        <th></th>
                    </div>
                </tr>
            </thead>
            <tbody>
                {data.map(row => (
                    <tr className={cn('line')} key={row.id}>
                        <td className={cn('line__cell')}>
                            <div className={cn('line__cell-user')}>
                                <input type='checkbox' />

                                <div className={cn('line__cell-user-text')}>
                                    <p>{row.name} </p>
                                    <h6>{row.login}</h6>
                                </div>
                            </div>
                        </td>
                        <td className={cn('line__cell')}>
                            <div className={cn('line__cell-status')}>
                                <span>{row.status} </span>
                            </div>
                        </td>
                        <td className={cn('line__cell')}>
                            <div className={cn('line__cell-role')}>
                                <p>{row.role}</p>
                            </div>
                        </td>
                        <td className={cn('line__cell')}>
                            <div className={cn('line__cell-role')}>
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
