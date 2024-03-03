import React from 'react';
import { TabsContainer } from 'components/tab';
import threeLayers from 'pages/img/3-layers.png';
import avatar from 'pages/img/Avatar.png';
import task from 'pages/img/check-square.png';
import flag from 'pages/img/flag.png';
import home from 'pages/img/home.png';
import life from 'pages/img/life-buoy.png';
import logout from 'pages/img/log-out.png';
import logo from 'pages/img/logformimg.JPG';
import logoname from 'pages/img/Logotype.jpg';
import setting from 'pages/img/settings.png';
import user from 'pages/img/users.png';

import './setting-page.scss';
export const SettingPage = () => {
    return (
        <div className='page'>
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
                        <li className='form-setting__content__support'>
                            <img src={life} alt='' width={20} />
                            <p>Support</p>
                        </li>
                        <li className='form-setting__content__additional'>
                            <img src={setting} alt='' width={20} />
                            <p>Settings</p>
                        </li>

                        <div className='used-space'>
                            <p className='used-space__title'>Used space</p>
                            <p className='used-space__subtitle'>Your team has used 80% of your available space. Need more?</p>
                            <div id='progress'></div>
                            <p className='used-space__dismiss'>Dismiss</p>
                            <div className='used-space__upgrade'>Upgrade plan</div>
                        </div>
                        <hr></hr>
                        <div className='profile'>
                            <img src={avatar} alt='' />
                            <div className='profile__info'>
                                <div className='profile__info__name'>Olivia Rhye</div>
                                <div className='profile__info__email'>olivia@untitledui.com</div>
                            </div>
                            <img src={logout} alt='' />
                        </div>
                    </ul>
                </div>
            </div>

            <div className='form-main'>
                <div className='form-main__logo'>Settings</div>

                <TabsContainer />
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
                                <option value='first'>Pacific Standard Time (PST) UTC−08:00</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='form-content'>
                    <div className='form-content__group' id='content2'>
                        <div className='text-box'>
                            <div className='text-box__subtitle'>Bio</div>
                            <div className='text-box__subsubtitle'>Write a short introduction.</div>
                        </div>
                        <div className='input-box'>
                            <input
                                className='input-box__introduction'
                                placeholder="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
                            />
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='form-content'>
                    <div className='form-content__group' id='content2'>
                        <div className='text-box'>
                            <div className='text-box__subtitle'>Portfolio Projects</div>
                            <div className='text-box__subsubtitle'>Share a few snippets of your work.</div>
                        </div>
                        <div className='input-box'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
