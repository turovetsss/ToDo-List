import React, { useMemo, useState } from 'react';
import { nanoid } from 'nanoid';

import { Button, FilterButton, Form, Input, Todo } from './components';

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
            <Input type='text' value='text' className='input--filled-hover'></Input>
            <h3>Filled Buttons</h3>
            <div className='buttons'>
                <Button>Label</Button>
                <Button className='button--filled-hover'>Label</Button>
                <Button className='button--filled-focus'>Label</Button>
                <Button disabled={true}>Label</Button>
            </div>
            <div className='buttons'>
                <Button size='l'>Label</Button>
                <Button size='l' className='button--filled-hover'>
                    Label
                </Button>
                <Button size='l' className='button--filled-focus'>
                    Label
                </Button>
                <Button size='l' disabled={true}>
                    Label
                </Button>
            </div>
            <h3>Outlined Buttons</h3>
            <div className='buttons'>
                <Button view='outlined'>Label</Button>
                <Button view='outlined' className='button--outlined-hover'>
                    Label
                </Button>
                <Button view='outlined' className='button--outlined-focus'>
                    Label
                </Button>
                <Button view='outlined' disabled={true}>
                    Label
                </Button>
            </div>
            <h3>Text Buttons</h3>
            <div className='buttons'>
                <Button view='text'>Label</Button>
                <Button view='text' className='button--text-hover'>
                    Label
                </Button>
                <Button view='text' className='button--text-focus'>
                    Label
                </Button>
                <Button view='text' disabled={true}>
                    Label
                </Button>
            </div>
            <h3>Elevated Buttons</h3>
            <div className='buttons'>
                <Button view='elevated'>Label</Button>
                <Button view='elevated' className='button--elevated-hover'>
                    Label
                </Button>
                <Button view='elevated' className='button--elevated-focus'>
                    Label
                </Button>
                <Button view='elevated' disabled={true}>
                    Label
                </Button>
            </div>
            <h3>Tonal Buttons</h3>
            <div className='buttons'>
                <Button view='tonal'>Label</Button>
                <Button view='tonal' className='button--tonal-hover'>
                    Label
                </Button>
                <Button view='tonal' className='button--tonal-focus'>
                    Label
                </Button>
                <Button view='tonal' disabled={true}>
                    Label
                </Button>
            </div>
            <h2>Dark Theme</h2>
            <h3>Filled Buttons</h3>
            <div className='buttons dark-theme'>
                <Button>Label</Button>
                <Button className='button--filled'>Label</Button>
                <Button className='button--filled'>Label</Button>
                <Button disabled={true}>Label</Button>
            </div>
            <h3>Outlined Buttons</h3>
            <div className='buttons dark-theme'>
                <Button view='outlined'>Label</Button>
                <Button className='button--outlined-hover'>Label</Button>
                <Button className='button--outlined-focus'>Label</Button>
                <Button view='outlined' disabled={true}>
                    Label
                </Button>
            </div>
            <h3>Text Buttons</h3>
            <div className='buttons dark-theme'>
                <Button view='text'>Label</Button>
                <Button className='button--text-hover'>Label</Button>
                <Button className='button--text-focus'>Label</Button>
                <Button view='text' disabled={true}>
                    Label
                </Button>
            </div>
            <h3>Elevated Buttons</h3>
            <div className='buttons dark-theme'>
                <Button view='elevated'>Label</Button>
                <Button className='button--elevated-hover'>Label</Button>
                <Button className='button--elevated-focus'>Label</Button>
                <Button view='elevated' disabled={true}>
                    Label
                </Button>
            </div>
            <h3>Tonal Buttons</h3>
            <div className='buttons dark-theme'>
                <Button view='tonal'>Label</Button>
                <Button className='button--tonal-hover'>Label</Button>
                <Button className='button--tonal-focus'>Label</Button>
                <Button view='tonal' disabled={true}>
                    Label
                </Button>
            </div>
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
