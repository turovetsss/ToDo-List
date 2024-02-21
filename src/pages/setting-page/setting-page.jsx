import React from 'react';
import threeLayers from 'pages/img/3-layers.png';
import task from 'pages/img/check-square.png';
import flag from 'pages/img/flag.png';
import home from 'pages/img/home.png';
import logo from 'pages/img/logformimg.JPG';
import logoname from 'pages/img/Logotype.jpg';
import user from 'pages/img/users.png';

import './setting-page.scss';
export const SettingPage = () => {
    return (
        <>
            <div className='form-setting'>
                <div className='form-setting__content'>
                    <ul>
                        <li>
                            <div className='form-setting__content__header'>
                                <img src={logo} height={32} />
                                <img src={logoname} height={30} width={100} />
                            </div>
                        </li>
                        <li className='form-setting__content__header'>
                            <input className='form-setting__content__input' placeholder=' 🔍︎  Search' />
                        </li>
                        <li className='form-setting__content__dropdown'>
                            <img src={home} alt='' width={20} />
                            <select className='form-setting__content__dropdown__choice'>
                                <option value='first'>Home</option>
                            </select>
                        </li>
                        <li className='form-setting__content__dropdown'>
                            <img src={home} alt='' width={20} />
                            <select className='form-setting__content__dropdown__choice'>
                                <option value='first'>Dashboard</option>
                            </select>
                        </li>
                        <li className='form-setting__content__dropdown'>
                            <img src={threeLayers} alt='' width={20} />
                            <select className='form-setting__content__dropdown__choice'>
                                <option value='first'>Projects</option>
                            </select>
                        </li>
                        <li className='form-setting__content__dropdown'>
                            <img src={task} alt='' width={20} />
                            <select className='form-setting__content__dropdown__choice'>
                                <option value='first'>Tasks</option>
                            </select>
                        </li>
                        <li className='form-setting__content__dropdown'>
                            <img src={flag} alt='' width={20} />
                            <select className='form-setting__content__dropdown__choice'>
                                <option value='first'>Reporting</option>
                            </select>
                        </li>
                        <li className='form-setting__content__dropdown'>
                            <img src={user} alt='' width={20} />
                            <select className='form-setting__content__dropdown__choice'>
                                <option value='first'>Users</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='form-main'>
                <div className='form-main__logo'>Settings</div>
                <div className='form-tabs'>
                    <input className='form-tabs__input' id='tab1' type='radio' name='tabs' checked={true} />
                    <label htmlFor='tab1'>My details</label>
                    <input className='form-tabs__input' id='tab2' type='radio' name='tabs' />
                    <label htmlFor='tab2'>Profile</label>
                    <input className='form-tabs__input' id='tab3' type='radio' name='tabs' />
                    <label htmlFor='tab3'>Password</label>
                    <input className='form-tabs__input' id='tab4' type='radio' name='tabs' />
                    <label htmlFor='tab4'>Team</label>
                    <input className='form-tabs__input' id='tab5' type='radio' name='tabs' />
                    <label htmlFor='tab1'>Plan</label>
                    <input className='form-tabs__input' id='tab6' type='radio' name='tabs' />
                    <label htmlFor='tab2'>Billing</label>
                    <input className='form-tabs__input' id='tab6' type='radio' name='tabs' />
                    <label htmlFor='tab3'>Email</label>
                    <input className='form-tabs__input' id='tab8' type='radio' name='tabs' />
                    <label htmlFor='tab4'>Notifications</label>
                    <input className='form-tabs__input' id='tab9' type='radio' name='tabs' />
                    <label htmlFor='tab4'>Integrations</label>
                    <input className='form-tabs__input' id='tab10' type='radio' name='tabs' />
                    <label htmlFor='tab4'>API</label>
                </div>
                <div className='form-content'>
                    <div className='form-content__group' id='content2'>
                        <div className='text-box'>
                            <div className='text-box__title'>Personal info</div>
                            <div className='text-box__subtitle'>Update your photo and personal details here. </div>
                        </div>
                        <div className='btn-box'>
                            <button className='btn-box__cancel'>Cancel</button>
                            <button className='btn-box__save'>Save</button>
                        </div>
                    </div>
                </div>

                <hr></hr>
                <div className='form-content'>
                    <div className='form-content__group' id='content2'>
                        <div className='text-box'>
                            <div className='text-box__subtitle'>Name</div>
                        </div>
                        <div className='input-box'>
                            <input type='text' placeholder='Oliva' className='input-box__name' />
                            <input type='text' placeholder='Rhye' className='input-box__name' />
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='form-content'>
                    <div className='form-content__group' id='content2'>
                        <div className='text-box'>
                            <div className='text-box__subtitle'>Email address</div>
                        </div>
                        <div className='input-box'>
                            <input type='text' placeholder='olivia@untitledui.com' className='input-box__info' />
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='form-content'>
                    <div className='form-content__group' id='content2'>
                        <div className='text-box'>
                            <div className='text-box__subtitle'>Role</div>
                        </div>
                        <div className='input-box'>
                            <input type='text' placeholder='Product Designer' className='input-box__info' />
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='form-content'>
                    <div className='form-content__group' id='content2'>
                        <div className='text-box'>
                            <div className='text-box__subtitle'>Country</div>
                        </div>
                        <div className='input-box'>
                            <select className='input-box__select'>
                                <img src={flag} alt='' />
                                <option value='first'>United States</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='form-content'>
                    <div className='form-content__group' id='content2'>
                        <div className='text-box'>
                            <div className='text-box__subtitle'>TimeZone</div>
                        </div>
                        <div className='input-box'>
                            <select className='input-box__select'>
                                <img src={flag} alt='' />
                                <option value='first'>Pacific Standard Time (PST) UTC−08:00</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
