import React from 'react';

import './log-form.scss';

export const LoginPage = () => {
    return (
        <>
            <header className='header'>
                <div className='header__logo'>
                    <img src='логотип.png' alt='Логотип' />
                </div>
                <nav className='header__menu'>
                    <ul className='menu__list'>
                        <li className='menu__item'>
                            <a href='#'>Пункт меню 1</a>
                        </li>
                        <li className='menu__item'>
                            <a href='#'>Пункт меню 2</a>
                        </li>
                        <li className='menu__item'>
                            <a href='#'>Пункт меню 3</a>
                        </li>
                        <li className='menu__item'>
                            <a href='#'>Пункт меню 4</a>
                        </li>
                    </ul>
                </nav>
                <div className='header__account'>
                    <button className='account__button'>Войти</button>
                </div>
            </header>
        </>
    );
};
