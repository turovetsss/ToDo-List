import React, { useCallback, useEffect, useState } from 'react';

import './slider.css';
const images = [
    'https://sun6-23.userapi.com/s/v1/ig2/7zwMYY3Wl5zO5u8Eek2_5vRb7xKKXcP1cwqwR894cuM_xkWC2RBhOpGECt6tnL7LpreOCQjMvQkikbkbmffEEcnQ.jpg?size=1060x1060&quality=95&crop=6,703,1060,1060&ava=1',
    'https://sun9-79.userapi.com/s/v1/if2/7mcCyjbxp4eCIZC5kw6Xsk4Sm6ehPponDpuHN0bzJ1lkeZ0U3T8nakl93FI3LW2MAJicZ7cFKUdI0IPKQS-bXYY0.jpg?size=302x604&quality=95&type=album',
    'https://img.youtube.com/vi/7TMPLOIDD48/0.jpg',
];

export const Slider = props => {
    const [current, setCurrent] = useState(0);

    function nextSlide() {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    function prevSlide() {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

    return (
        <div>
            <div className='slider'>
                <div className='left-arrow' onClick={prevSlide}>
                    ⬅
                </div>
                <div className='right-arrow' onClick={nextSlide}>
                    ⮕
                </div>
                {images.map(
                    (image, index) =>
                        current === index && (
                            <div key={image} className='slide'>
                                <img src={image} alt='images' />
                            </div>
                        ),
                )}
            </div>
        </div>
    );
};
