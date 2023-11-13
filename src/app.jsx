import React, { useMemo, useState } from 'react';
import { nanoid } from 'nanoid';

import { Button, FilterButton, Form, Todo } from './components';

import './app.css';

const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

export const App = props => {
    const [tasks, setTasks] = useState(props.tasks);
    const [filter, setFilter] = useState('All');

    function addTask(name) {
        const newTask = { id: `todo-${nanoid()}`, name, completed: false };

        setTasks([...tasks, newTask]);
    }
    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map(task => {
            if (id === task.id) {
                return { ...task, completed: !task.completed };
            }

            return task;
        });

        setTasks(updatedTasks);
    }
    function deleteTask(id) {
        const remainingTasks = tasks.filter(task => id !== task.id);

        setTasks(remainingTasks);
    }
    function editTask(id, newName) {
        const editedTaskList = tasks.map(task => {
            if (id === task.id) {
                return { ...task, name: newName };
            }

            return task;
        });

        setTasks(editedTaskList);
    }

    const taskList = useMemo(
        () =>
            tasks
                .filter(FILTER_MAP[filter])
                .map(task => (
                    <Todo
                        id={task.id}
                        name={task.name}
                        completed={task.completed}
                        key={task.id}
                        toggleTaskCompleted={toggleTaskCompleted}
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />
                )),
        [deleteTask, editTask, filter, tasks, toggleTaskCompleted],
    );

    const filterList = FILTER_NAMES.map(name => <FilterButton key={name} name={name} isPressed={name === filter} setFilter={setFilter} />);

    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';

    const headingText = `${taskList.length} ${tasksNoun} remaining`;

    return (
        <div className='todoapp stack-large'>
            <Button type='button'>New Button</Button>
            <br />
            <h1>TodoList</h1>
            <Form addTask={addTask} />
            <div className='filters btn-group stack-exception'>{filterList}</div>
            <h2 id='list-heading'>{headingText}</h2>
            <ul role='list' className='todo-list stack-large stack-exception' aria-labelledby='list-heading'>
                {taskList}
            </ul>
        </div>
    );
};