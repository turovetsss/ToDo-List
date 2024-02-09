import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './log-form-hook.scss';
export const LoginPageHook = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div>
            <div className='header'>
                <div className='header__logo'>
                    <img src={require('./img/logformimg.JPG')} height={32} />
                    <img src={require('./img/Logotype.jpg')} height={30} width={100} />
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
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='box'>
                    <div className='box-signup'>
                        <img src={require('./img/logformimg.JPG')} height={48} />
                    </div>
                    <h1>Log in to your account</h1>
                    <p>Welcome back! Please enter your details.</p>
                    <div className='text-box'>
                        <label>Email</label>
                        <input
                            name='email'
                            ref={register({
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                        {errors.email && <span className='error'>{errors.email.message}</span>}
                    </div>
                    <div className='text-box'>
                        <label>Password</label>
                        <input name='password' type='password' ref={register({ required: 'Password is required' })} />
                        {errors.password && <span className='error'>{errors.password.message}</span>}
                    </div>

                    <div className='check-box'>
                        <div>
                            <input type='checkbox' id='scales' name='scales' checked={true} />
                            <label htmlFor='scales'>Remember for 30 days</label>
                        </div>
                        <div className='rem'>
                            <a className='a-name'>Forgot password</a>
                        </div>
                    </div>

                    <button className='sign-btn'>Sign In</button>

                    <div className='google-btn'>
                        <img src={require('./img/soc.jpg')} height={24} />
                        Sign in with Google
                    </div>
                    <div className='box-signup'>
                        <a>Don’t have an account? </a>
                        <a className='a-name'>Sign up</a>
                    </div>
                </div>
            </form>
        </div>
    );
};
