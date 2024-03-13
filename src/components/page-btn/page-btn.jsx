import React from 'react';
import left from 'assets/img/arrow-left.png';
import right from 'assets/img/arrow-right.png';
import { classname } from 'utils';

import './page-btn.scss';
const cn = classname('page-btn');

export const PageBtn = () => {
    return (
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
    );
};
