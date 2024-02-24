import React from 'react';
import down from 'pages/img/arrow-down.png';
import avatar from 'pages/img/Avatar.png';
import edit from 'pages/img/edit-2.png';
import help from 'pages/img/Help-icon.png';
import trash from 'pages/img/Icon.png';

import './table.scss';
export const TablePage = () => {
    return (
        <div>
            <div className='header'>
                {' '}
                <h1 className='header__name'>Team Members</h1>
                <div className='header__user'>100 user</div>
            </div>
            <table className='table'>
                <thead>
                    <tr className='table__header'>
                        <div className='table__header__row'>
                            <th className='table__header__row__name'>
                                <input type='checkbox' />
                                <p>Name</p>
                            </th>
                        </div>
                        <div className='table__header__row'>
                            <th className='table__header__row__status'>
                                <p>Status</p>
                                <img src={down} alt='' className='img-head' />
                            </th>
                        </div>
                        <div className='table__header__row'>
                            <th className='table__header__row__role'>
                                <p>Role</p>
                                <img src={help} alt='' className='img-head' />
                            </th>
                        </div>
                        <div className='table__header__row'>
                            <th className='table__header__row__email'>
                                <p>Email address</p>
                            </th>
                        </div>
                        <div className='table__header__row'>
                            <th className='table__header__row__team'>
                                <p>Team</p>
                            </th>
                        </div>
                        <div className='table__header__row'>
                            <th className='table__header__row__none'></th>
                        </div>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table___line'>
                        <td className='table__line__cell'>
                            <div className='table__line__cell__user'>
                                <div className='table__line__cell__user__data'>
                                    <input type='checkbox' />
                                    <img src={avatar} alt='' />
                                    <div className='text'>
                                        <div className='text__title'>Olivia Rhye</div>
                                        <div className='text__subtitle'>@olivia</div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className='table__line__cell'>
                            <div className='table__line__cell__status'>
                                <div className='table__line__cell__status__data'>
                                    <div className='status'> Active </div>
                                </div>
                            </div>
                        </td>
                        <td className='table__line__cell'>
                            <div className='table__line__cell__role'>
                                <div className='table__line__cell__role__data'>
                                    <div className='text'>
                                        <div className='text__subtitle'>Product Designer</div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className='table__line__cell'>
                            <div className='table__line__cell__role'>
                                <div className='table__line__cell__role__data'>
                                    <div className='text'>
                                        <div className='text__subtitle'>olivia@untitledui.com</div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className='table__line__cell'>
                            <div className='table__line__cell__teams'>
                                <div className='table__line__cell__teams__data'>
                                    <div className='table__line__cell__teams__data__design'>Design</div>
                                    <div className='table__line__cell__teams__data__product'>Product</div>
                                    <div className='table__line__cell__teams__data__marketing'>Marketing</div>
                                    <div className='table__line__cell__teams__data__etc'>+4</div>
                                </div>
                            </div>
                        </td>
                        <td className='table__line__cell'>
                            <div className='table__line__cell__none'>
                                <div className='table__line__cell__none__data'>
                                    <img src={trash} alt='' />
                                    <img src={edit} alt='' />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className='table___line'>
                        <td className='table__line__cell'>
                            <div className='table__line__cell__user'>
                                <div className='table__line__cell__user__data'>
                                    <input type='checkbox' />
                                    <img src={avatar} alt='' />
                                    <div className='text'>
                                        <div className='text__title'>Olivia Rhye</div>
                                        <div className='text__subtitle'>@olivia</div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className='table__line__cell'>
                            <div className='table__line__cell__status'>
                                <div className='table__line__cell__status__data'>
                                    <div className='status'> Active </div>
                                </div>
                            </div>
                        </td>
                        <td className='table__line__cell'>
                            <div className='table__line__cell__role'>
                                <div className='table__line__cell__role__data'>
                                    <div className='text'>
                                        <div className='text__subtitle'>Product Designer</div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className='table__line__cell'>
                            <div className='table__line__cell__role'>
                                <div className='table__line__cell__role__data'>
                                    <div className='text'>
                                        <div className='text__subtitle'>olivia@untitledui.com</div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className='table__line__cell'>
                            <div className='table__line__cell__teams'>
                                <div className='table__line__cell__teams__data'>
                                    <div className='table__line__cell__teams__data__design'>Design</div>
                                    <div className='table__line__cell__teams__data__product'>Product</div>
                                    <div className='table__line__cell__teams__data__marketing'>Marketing</div>
                                    <div className='table__line__cell__teams__data__etc'>+4</div>
                                </div>
                            </div>
                        </td>
                        <td className='table__line__cell'>
                            <div className='table__line__cell__none'>
                                <div className='table__line__cell__none__data'>
                                    <img src={trash} alt='' />
                                    <img src={edit} alt='' />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
