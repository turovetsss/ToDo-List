import React from 'react';
import logo from 'pages/log-form/img/logformimg.JPG';
import logoname from 'pages/log-form/img/Logotype.jpg';

import './setting-page.scss';
export const SettingPage = () => {
    return (
        <div className='glav'>
            <div className='div1'>
                <div className='header__logo'>
                    <img src={logo} height={32} />
                    <img src={logoname} height={30} width={100} />
                </div>
                <div className='div1'>
                    <ul className='menu'>
                        <li className='menu__item'>
                            <a href='#'>Home</a>
                        </li>
                        <li className='menu__item'>
                            <a href='#'>Products</a>
                        </li>
                        <li className='menu__item'>
                            <a href='#'>Resources</a>
                        </li>
                        <li className='menu__item'>
                            <a href='#'>Pricing</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='div2'>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sequi necessitatibus, velit aliquam eius, nesciunt exercitationem voluptatem
                    dignissimos aspernatur officiis provident ipsam voluptates unde? Libero, ex. Quibusdam suscipit ratione nemo?
                </div>
            </div>
        </div>
    );
};
