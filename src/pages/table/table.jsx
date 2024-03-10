import React from 'react';
import left from 'assets/img/arrow-left.png';
import right from 'assets/img/arrow-right.png';
import { Table } from 'components/table';
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
            <Table></Table>
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
