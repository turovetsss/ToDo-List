import React, { useState } from 'react';
import { Button } from 'components';

import './hookform.scss';
export const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
    });
    const handleChange = e => {
        const { name, value } = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = e => {
        e.preventDefault();

        let validationErrors = {};

        if (!isValidUsername(formData.username)) {
            validationErrors.username = 'Пожалуйста, введите корректное имя пользователя.';
        }
        if (!isValidEmail(formData.email)) {
            validationErrors.email = 'Пожалуйста, введите корректный адрес электронной почты.';
        }
        if (!isValidPassword(formData.password)) {
            validationErrors.password = 'Пожалуйста, введите корректный пароль.';
        }

        if (Object.keys(validationErrors).length > 0) {
            console.log(setErrors(validationErrors));

            return;
        }

        console.log(formData);
    };

    const isValidEmail = email => {
        const emailRegex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return emailRegex.test(email.toLowerCase());
    };
    const isValidPassword = password => {
        const passwordRegex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;

        return passwordRegex.test(password);
    };
    const isValidUsername = username => {
        const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;

        return usernameRegex.test(username);
    };

    return (
        <form className='container' onSubmit={handleSubmit}>
            <div>
                <label>Имя пользователя:</label>
                <input type='text' name='username' value={formData.username} onChange={handleChange} />
                {errors.username && <span>{errors.username}</span>}
            </div>
            <div>
                <label>Адрес электронной почты:</label>
                <input type='email' name='email' value={formData.email} onChange={handleChange} />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label>Пароль:</label>
                <input type='password' name='password' value={formData.password} onChange={handleChange} />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <Button className='button--filled'>Label</Button>
            <button className='button--filled-hover' type='submit'>
                Зарегистрироваться
            </button>
        </form>
    );
};
