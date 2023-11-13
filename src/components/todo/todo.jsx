import React, { useCallback, useEffect, useRef, useState } from 'react';

import './todo.css';

export const Todo = props => {
    const { editTask, id, name, completed, toggleTaskCompleted, deleteTask } = props;
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);

    const onChangeHandler = useCallback(e => {
        setNewName(e.target.value);
    }, []);

    const onSubmitHandler = useCallback(
        e => {
            e.preventDefault();
            if (newName.trim() !== '') {
                editTask(id, newName);
                setNewName('');
                setEditing(false);
            } else {
                alert('Вы ничего не ввели!');
            }
        },
        [editTask, id, newName],
    );

    const editingTemplate = (
        <form className='stack-small' onSubmit={onSubmitHandler}>
            <div className='form-group'>
                <label className='todo-label' htmlFor={id}>
                    New name for {props.name}
                </label>
                <input id={id} className='todo-text' type='text' value={newName} onChange={onChangeHandler} ref={editFieldRef} />
            </div>
            <div className='btn-group'>
                <button type='button' className='btn todo-cancel' onClick={() => setEditing(false)}>
                    Cancel
                    <span className='visually-hidden'>
                        renaming
                        {name}
                    </span>
                </button>
                <button type='submit' className='btn btn__primary todo-edit'>
                    Save
                    <span className='visually-hidden'>
                        new name for
                        {name}
                    </span>
                </button>
            </div>
        </form>
    );
    const viewTemplate = (
        <div className='stack-small'>
            <div className='c-cb'>
                <input id={id} type='checkbox' defaultChecked={completed} onChange={() => toggleTaskCompleted(id)} />
                <label className='todo-label' htmlFor={id}>
                    {name}
                </label>
            </div>
            <div className='btn-group'>
                <button type='button' className='btn' onClick={() => setEditing(true)} ref={editButtonRef}>
                    Edit <span className='visually-hidden'>{name}</span>
                </button>

                <button type='button' className='btn btn__danger' onClick={() => deleteTask(id)}>
                    Delete <span className='visually-hidden'>{name}</span>
                </button>
            </div>
        </div>
    );

    useEffect(() => {
        if (isEditing) {
            editFieldRef.current.focus();
        } else {
            editButtonRef.current.focus();
        }
    }, [isEditing]);

    return <li className='todo'>{isEditing ? editingTemplate : viewTemplate}</li>;
};
