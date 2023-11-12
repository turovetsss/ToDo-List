import React, { useCallback, useState } from 'react';

import './form.css';

export const Form = (props) => {
    const { addTask } = props;
    const [name, setName] = useState('');

    const onChangeHandler = useCallback((e) => {
        setName(e.target.value);
    }, []);

    const onSubmitHandler = useCallback(
        (e) => {
            e.preventDefault();
            if (name.trim() !== '') {
                addTask(name);
                setName('');
            } else {
                alert("You didn't enter a value!");
            }
        },
        [addTask, name],
    );

    return (
        <form onSubmit={onSubmitHandler}>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={onChangeHandler}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
};
