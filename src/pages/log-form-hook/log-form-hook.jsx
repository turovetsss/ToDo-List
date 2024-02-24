import React from 'react';
import logo from 'pages/img/logformimg.JPG';
import logoname from 'pages/img/Logotype.jpg';
import google from 'pages/img/soc.jpg';
import { useForm } from 'react-hook-form';
import { classname } from 'utils';

import './log-form-hook.scss';

const cn = classname('log-form-hook');

export const LogFormHook = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };

    return (
        <div className={cn()}>
            <div className={cn('header')}>
                <div className={cn('header-logo')}>
                    <img src={logo} height={32} />
                    <img src={logoname} height={30} width={100} />
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href='#' className='a1'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='#'>Products</a>
                        </li>
                        <li>
                            <a href='#'>Resources</a>
                        </li>
                        <li>
                            <a href='#'>Pricing</a>
                        </li>
                    </ul>
                </nav>

                <div className={cn('header-controls')}>
                    <button className={cn('header-login-button')}>Log in</button>
                    <button className={cn('header-sign-up-button')}>Sign up</button>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='box__signup'>
                    <img src={logo} height={48} />
                </div>
                <h1 className='box__title'>Log in to your account</h1>
                <p className='box__sub-title'>Welcome back! Please enter your details.</p>
                <div className='text-box'>
                    <label className='text-box__label'>Email</label>
                    <input
                        type='email'
                        className={`form-control ${errors.email ? 'error' : 'email'}`}
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email && <span className='error-message'>Пожалуйста, введите корректный email.</span>}
                </div>
                <div className='text-box'>
                    <label className='text-box__label'>Password</label>
                    <input
                        type='password'
                        className={`form-control ${errors.password ? 'error' : 'email'}`}
                        {...register('password', { required: true, pattern: /(?=.{8,})(?=.*[a-zA-Z])/ })}
                    />
                    {errors.password && <span className='error-message'>Введите корректный пароль</span>}
                </div>
                <div className='check-box'>
                    <div>
                        <input type='checkbox' id='scales' name='scales' />
                        <label htmlFor='scales'>Remember for 30 days</label>
                    </div>
                    <div className='rem'>
                        <a className='a-name'>Forgot password</a>
                    </div>
                </div>
                <button className='sign-btn'>Sign In</button>
                <div className='google-btn'>
                    <img src={google} height={24} />
                    Sign in with Google
                </div>
                <div className='box__signup'>
                    <a>Don’t have an account? </a>
                    <a className='a-name'>Sign up</a>
                </div>
            </form>
        </div>
    );
};
