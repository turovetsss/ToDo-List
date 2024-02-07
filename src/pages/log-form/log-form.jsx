import React, { useState } from 'react';

import './log-form.scss';
export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = {};

        if (!email || !password) {
            newErrors.new = 'Incorrect login or password';
            valid = false;
        }

        setErrors(newErrors);

        return valid;
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (validateForm()) {
            console.log('Email:', email);
            console.log('Password:', password);
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
            <form onSubmit={handleSubmit}>
                <div className='box'>
                    <div className='box-signup'>
                        <img src={require('./img/logformimg.JPG')} height={48} />
                    </div>
                    <h1>Log in to your account</h1>
                    <p>Welcome back! Please enter your details.</p>
                    <div className='text-box'>
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={handleEmailChange}
                            className={errors.new ? 'error' : 'email'}
                            type='text'
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className='text-box'>
                        <label>Password</label>
                        <input type='password' value={password} onChange={handlePasswordChange} className={errors.new ? 'error' : 'email'} />
                    </div>
                    {errors.new && <div className='error-message'>{errors.new}</div>}

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
