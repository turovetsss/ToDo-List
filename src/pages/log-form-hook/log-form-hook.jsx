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
                <img src={logo} height={48} />
                <h1>Log in to your account</h1>
                <p>Welcome back! Please enter your details.</p>
                <div className={cn('input-text')}>
                    <label>Email</label>
                    <input
                        type='email'
                        className={`form-control ${errors.email ? 'error' : 'email'}`}
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email && <span className='error-message'>Пожалуйста, введите корректный email.</span>}
                </div>
                <div className={cn('input-text')}>
                    <label>Password</label>
                    <input
                        type='password'
                        className={`form-control ${errors.password ? 'error' : 'email'}`}
                        {...register('password', { required: true, pattern: /(?=.{8,})(?=.*[a-zA-Z])/ })}
                    />
                    {errors.password && <span className='error-message'>Введите корректный пароль</span>}
                </div>
                <div className={cn('check-box')}>
                    <input type='checkbox' id='scales' name='scales' />
                    <label htmlFor='scales'>Remember for 30 days</label>
                    <a>Forgot password</a>
                </div>
                <button className={cn('sign-btn')}>Sign In</button>
                <div className={cn('google-btn')}>
                    <img src={google} height={24} />
                    Sign in with Google
                </div>
                <div className={cn('remember')}>
                    <a>Don’t have an account? </a>
                    <a>Sign up</a>
                </div>
            </form>
        </div>
    );
};
