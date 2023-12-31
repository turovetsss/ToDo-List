import React from 'react';
import { Button } from 'components';

export const ButtonsPage = () => {
    return (
        <div className='todoapp stack-large'>
            <h3>Filled Buttons</h3>
            <div className='buttons'>
                <Button>Label</Button>
                <Button className='button--view-filled-hover'>Label</Button>
                <Button className='button--view-filled-focus'>Label</Button>
                <Button disabled={true}>Label</Button>
            </div>
            <div className='buttons'>
                <Button size='l'>Label</Button>
                <Button size='l' className='button--view-filled-hover'>
                    Label
                </Button>
                <Button size='l' className='button--view-filled-focus'>
                    Label
                </Button>
                <Button size='l' disabled={true}>
                    Label
                </Button>
            </div>
            <h3>Outlined Buttons</h3>
            <div className='buttons'>
                <Button view='outlined'>Label</Button>
                <Button view='outlined' className='button--view-outlined-hover'>
                    Label
                </Button>
                <Button view='outlined' className='button--view-outlined-focus'>
                    Label
                </Button>
                <Button view='outlined' disabled={true}>
                    Label
                </Button>
            </div>
            <h3>Text Buttons</h3>
            <div className='buttons'>
                <Button view='text'>Label</Button>
                <Button view='text' className='button--view-text-hover'>
                    Label
                </Button>
                <Button view='text' className='button--view-text-focus'>
                    Label
                </Button>
                <Button view='text' disabled={true}>
                    Label
                </Button>
            </div>
            <h3>Elevated Buttons</h3>
            <div className='buttons'>
                <Button view='elevated'>Label</Button>
                <Button view='elevated' className='button--view-elevated-hover'>
                    Label
                </Button>
                <Button view='elevated' className='button--view-elevated-focus'>
                    Label
                </Button>
                <Button view='elevated' disabled={true}>
                    Label
                </Button>
            </div>
            <h3>Tonal Buttons</h3>
            <div className='buttons'>
                <Button view='tonal'>Label</Button>
                <Button view='tonal' className='button--view-tonal-hover'>
                    Label
                </Button>
                <Button view='tonal' className='button--view-tonal-focus'>
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
                <Button className='button--view-filled'>Label</Button>
                <Button className='button--view-filled'>Label</Button>
                <Button disabled={true}>Label</Button>
            </div>
            <h3>Outlined Buttons</h3>
            <div className='buttons dark-theme'>
                <Button view='outlined'>Label</Button>
                <Button view='outlined' className='button--view-outlined-hover'>
                    Label
                </Button>
                <Button view='outlined' className='button--view-outlined-focus'>
                    Label
                </Button>
                <Button view='outlined' disabled={true}>
                    Label
                </Button>
            </div>
            <h3>Text Buttons</h3>
            <div className='buttons dark-theme'>
                <Button view='text'>Label</Button>
                <Button view='text' className='button--view-text-hover'>
                    Label
                </Button>
                <Button view='text' className='button--view-text-focus'>
                    Label
                </Button>
                <Button view='text' disabled={true}>
                    Label
                </Button>
            </div>
            <h3>Elevated Buttons</h3>
            <div className='buttons dark-theme'>
                <Button view='elevated'>Label</Button>
                <Button view='elevated' className='button--view-elevated-hover'>
                    Label
                </Button>
                <Button view='elevated' className='button--view-elevated-focus'>
                    Label
                </Button>
                <Button view='elevated' disabled={true}>
                    Label
                </Button>
            </div>
            <h3>Tonal Buttons</h3>
            <div className='buttons dark-theme'>
                <Button view='tonal'>Label</Button>
                <Button view='tonal' className='button--view-tonal-hover'>
                    Label
                </Button>
                <Button view='tonal' className='button--view-tonal-focus'>
                    Label
                </Button>
                <Button view='tonal' disabled={true}>
                    Label
                </Button>
            </div>
        </div>
    );
};
