import React, { useCallback, useState } from 'react';
import { Button, Input } from 'components';

import './hookform.scss';

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

    const getError = useCallback(field => errors[field], [errors]);

    const handleChange = useCallback(e => {
        const { name, value } = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }, []);

    const handleSubmit = useCallback(
        e => {
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
        },
        [formData],
    );

    return (
        <form className='container' onSubmit={handleSubmit}>
            <div>
                <label>Имя пользователя:</label>
                <Input
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    invalid={getError('username')}
                    hint={getError('username')}
                />
            </div>
            <div>
                <label>Адрес электронной почты:</label>
                <Input type='email' name='email' value={formData.email} onChange={handleChange} invalid={getError('email')} hint={getError('email')} />
            </div>
            <div>
                <label>Пароль:</label>
                <Input
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    invalid={getError('password')}
                    hint={getError('password')}
                />
            </div>
            <Button type='submit'>Зарегистрироваться</Button>
        </form>
    );
};
