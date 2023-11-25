import { React, useState } from 'react';
import { useForm } from 'react-hook-form';

import './hook-form.css';
let renderCount = 0;

export const ReactHookForm = props => {
    const { register, handleSubmit, watch } = useForm();

    const [data, setData] = useState('');
    const watchIsDeveloper = watch('isDeveloper');

    renderCount += 1;

    return (
        <div className=''>
            <div className='' style={{ height: '700px' }}>
                <h2 className=''>React Hook Form Advanced</h2>
                Render Count -- {renderCount}
                <form onSubmit={handleSubmit(setData)} className=''>
                    <input className='border-2 outline-none p-2 rounded-md' placeholder='Name' {...register('name', { required: true })} />

                    <input className='' placeholder='Email' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                    <input className='' placeholder='Phone Number' {...register('phoneNumber')} />

                    <button className='' type='submit'>
                        <span>Submit</span>
                    </button>
                </form>
                <p className=''>
                    {' '}
                    <strong> Data: </strong> {JSON.stringify(data)}{' '}
                </p>
            </div>
        </div>
    );
};
