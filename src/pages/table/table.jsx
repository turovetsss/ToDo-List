import React from 'react';
import { Line } from 'components/line';
import down from 'pages/img/arrow-down.png';
import left from 'pages/img/arrow-left.png';
import right from 'pages/img/arrow-right.png';
import help from 'pages/img/Help-icon.png';
import { classname } from 'utils';

import './table.scss';
const cn = classname('table');

export const TablePage = () => {
    return (
        <div>
            <div className='title'>
                <h1>Team Members</h1>
                <span>100 user</span>
            </div>
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
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </tbody>
            </table>
            <div className='page-btn'>
                <div className='page-btn__previous'>
                    <img src={left} alt='' />
                    <div>Previous</div>
                </div>
                <div className='page-btn__num'>
                    <div className='page-btn__num__btn'>1</div>
                    <div className='page-btn__num__btn'>2</div>
                    <div className='page-btn__num__btn'>3</div>
                    <div className='page-btn__num__btn'>...</div>
                    <div className='page-btn__num__btn'>8</div>
                    <div className='page-btn__num__btn'>9</div>
                    <div className='page-btn__num__btn'>10</div>
                </div>
                <div className='page-btn__next'>
                    <div>Next</div>
                    <img src={right} alt='' />
                </div>
            </div>
        </div>
    );
};
