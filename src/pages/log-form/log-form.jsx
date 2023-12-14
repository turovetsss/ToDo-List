import React from 'react';

import './log-form.scss';

export const LoginPage = () => {
    return (
        <>
            <header className='header'>
                <div className='header__logo'>
                    <img src='логотип.png' alt='Логотип' />
                    <a href=''>Untlined</a>
                </div>
                <nav className='header__menu'>
                    <ul className='menu__list'>
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
                </nav>
                <div className='header__account'>
                    <button className='login__button'>Log in</button>
                    <button className='signup__button'>Sign up</button>
                </div>
            </header>
        </>
    );
};
