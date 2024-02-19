import { React, useEffect } from 'react';
import logo from 'pages/img/logformimg.JPG';
import logoname from 'pages/img/Logotype.jpg';
import google from 'pages/img/soc.jpg';
import { useForm } from 'react-hook-form';

import './log-form-hook.scss';

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
        <div>
            <div className='header'>
                <div className='header__logo'>
                    <img src={logo} height={32} />
                    <img src={logoname} height={30} width={100} />
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
                        <img src={logo} height={48} />
                    </div>
                    <h1>Log in to your account</h1>
                    <p>Welcome back! Please enter your details.</p>
                    <div className='text-box'>
                        <label>Email</label>
                        <input
                            type='email'
                            className={`form-control ${errors.email ? 'error' : 'email'}`}
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        />
                        {errors.email && <span className='error-message'>Пожалуйста, введите корректный email.</span>}
                    </div>
                    <div className='text-box'>
                        <label>Password</label>
                        <input
                            type='password'
                            className={`form-control ${errors.password ? 'error' : 'email'}`}
                            {...register('password', { required: true, pattern: /(?=.{8,})(?=.*[a-zA-Z])/ })}
                        />
                        {errors.password && <span className='error-message'>Введите корректный пароль</span>}
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
                        <img src={google} height={24} />
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
