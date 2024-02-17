import React from 'react';
import { useForm } from 'react-hook-form';

import './log-form-hook.scss';
export const LoginPageHook = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        const userData = JSON.parse(localStorage.getItem(data.email));

        if (userData) {
            if (userData.password === data.password) {
                console.log(userData.name + ' You Are Successfully Logged In');
            } else {
                console.log('Email or Password is not matching with our record');
            }
        } else {
            console.log('Email or Password is not matching with our record');
        }
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
                        <input type='email' {...register('email', { required: true })} />
                        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                    </div>
                    <div className='text-box'>
                        <label>Password</label>
                        <input type='password' {...register('password')} />
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
