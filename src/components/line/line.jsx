import React from 'react';
import avatar from 'pages/img/Avatar.png';
import edit from 'pages/img/edit-2.png';
import trash from 'pages/img/Icon.png';
import { classname } from 'utils';

import './line.scss';
const cn = classname('line');

export const Line = () => {
    return (
        <>
            <tr className={cn()}>
                <td className={cn('cell')}>
                    <div className={cn('cell-user')}>
                        <input type='checkbox' />
                        <img src={avatar} />
                        <div className={cn('cell-user-text')}>
                            <p>Olivia Rhye</p>
                            <h6>@olivia</h6>
                        </div>
                    </div>
                </td>
                <td className={cn('cell')}>
                    <div className={cn('cell-status')}>
                        <span> Active </span>
                    </div>
                </td>
                <td className={cn('cell')}>
                    <div className={cn('cell-role')}>
                        <p>Product Designer</p>
                    </div>
                </td>
                <td className={cn('cell')}>
                    <div className={cn('cell-role')}>
                        <p>olivia@untitledui.com</p>
                    </div>
                </td>
                <td className={cn('cell')}>
                    <div className={cn('cell-team')}>
                        <div className={cn('cell-team-first')}>Design</div>
                        <div className={cn('cell-team-second')}>Product</div>
                        <div className={cn('cell-team-third')}>Marketing</div>
                        <div className={cn('cell-team-etc')}>+4</div>
                    </div>
                </td>
                <td className={cn('cell')}>
                    <div className={cn('cell-edit')}>
                        <img src={trash} alt='' />
                        <img src={edit} alt='' />
                    </div>
                </td>
            </tr>
        </>
    );
};
