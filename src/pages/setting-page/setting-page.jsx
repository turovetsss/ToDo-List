import React from 'react';
import threeLayers from 'assets/img/3-layers.png';
import avatar from 'assets/img/Avatar.png';
import task from 'assets/img/check-square.png';
import flag from 'assets/img/flag.png';
import home from 'assets/img/home.png';
import life from 'assets/img/life-buoy.png';
import logout from 'assets/img/log-out.png';
import logo from 'assets/img/logformimg.JPG';
import logoname from 'assets/img/Logotype.jpg';
import setting from 'assets/img/settings.png';
import user from 'assets/img/users.png';
import { TabsContainer } from 'components/tab';
import { classname } from 'utils';
const cn = classname('setting');

import { CustomSelect } from 'components/select';
import { tabsData } from 'components/tab/data';

import './setting-page.scss';
export const SettingPage = () => {
    return (
        <div className='page'>
            <div className={cn()}>
                <div className={cn('content')}>
                    <ul>
                        <li>
                            <div className={cn('content-logo')}>
                                <img src={logo} height={32} />
                                <img src={logoname} height={30} width={100} />
                            </div>
                        </li>
                        <li className={cn('content-logo')}>
                            <input className={cn('content-logo-input')} placeholder=' 🔍︎  Search' />
                        </li>
                        <li className={cn('content-dropdown')}>
                            <img src={home} alt='' width={20} />
                            <select className={cn('content-dropdown-choice')}>
                                <option value='first'>Home</option>
                            </select>
                        </li>
                        <li className={cn('content-dropdown')}>
                            <img src={home} alt='' width={20} />
                            <select className={cn('content-dropdown-choice')}>
                                <option value='first'>Dashboard</option>
                            </select>
                        </li>
                        <li className={cn('content-dropdown')}>
                            <img src={threeLayers} alt='' width={20} />
                            <select className={cn('content-dropdown-choice')}>
                                <option value='first'>Projects</option>
                            </select>
                        </li>
                        <li className={cn('content-dropdown')}>
                            <img src={task} alt='' width={20} />
                            <select className={cn('content-dropdown-choice')}>
                                <option value='first'>Tasks</option>
                            </select>
                        </li>
                        <li className={cn('content-dropdown')}>
                            <img src={flag} alt='' width={20} />
                            <select className={cn('content-dropdown-choice')}>
                                <option value='first'>Reporting</option>
                            </select>
                        </li>
                        <li className={cn('content-dropdown')}>
                            <img src={user} alt='' width={20} />
                            <select className={cn('content-dropdown-choice')}>
                                <option value='first'>Users</option>
                            </select>
                        </li>
                        <li className={cn('content-support')}>
                            <img src={life} alt='' width={20} />
                            <p>Support</p>
                        </li>
                        <li className={cn('content-additional')}>
                            <img src={setting} alt='' width={20} />
                            <p>Settings</p>
                        </li>

                        <div className={cn('content-space')}>
                            <h5>Used space</h5>
                            <p>Your team has used 80% of your available space. Need more?</p>
                            <div id='progress'></div>
                            <a>Dismiss</a>
                            <span>Upgrade plan</span>
                        </div>
                        <hr></hr>
                        <div className={cn('content-profile')}>
                            <img src={avatar} alt='' />
                            <div className={cn('content-profile-info')}>
                                <h5>Olivia Rhye</h5>
                                <span>olivia@untitledui.com</span>
                            </div>
                            <img src={logout} alt='' />
                        </div>
                    </ul>
                </div>
            </div>

            <div className={cn('main')}>
                <h2>Settings</h2>
                <TabsContainer tabsData={tabsData} />

                <div className={cn('main-content')}>
                    <div className={cn('main-content-group')} id='content2'>
                        <div className={cn('main-content-group-text')}>
                            <h3>Personal info</h3>
                            <p>Update your photo and personal details here. </p>
                        </div>
                        <button>Cancel</button>
                        <span>Save</span>
                    </div>
                </div>

                <hr></hr>
                <div className={cn('main-content')}>
                    <div className={cn('main-content-group')} id='content2'>
                        <div className={cn('main-content-group-text')}>
                            <p>Name</p>
                        </div>
                        <input type='text' placeholder='Oliva' className={cn('main-content-group-name')} />
                        <input type='text' placeholder='Rhye' className={cn('main-content-group-name')} />
                    </div>
                </div>
                <hr></hr>
                <div className={cn('main-content')}>
                    <div className={cn('main-content-group')} id='content2'>
                        <div className={cn('main-content-group-text')}>
                            <p>Email address</p>
                        </div>
                        <input type='text' placeholder='olivia@untitledui.com' className={cn('main-content-group-info')} />
                    </div>
                </div>
                <hr></hr>
                <div className={cn('main-content')}>
                    <div className={cn('main-content-group')} id='content2'>
                        <div className={cn('main-content-group-text')}>
                            <p>Role</p>
                        </div>

                        <input type='text' placeholder='Product Designer' className={cn('main-content-group-info')} />
                    </div>
                </div>
                <hr></hr>
                <div className={cn('main-content')}>
                    <div className={cn('main-content-group')} id='content2'>
                        <div className={cn('main-content-group-text')}>
                            <p>Country</p>
                        </div>
                        <CustomSelect />
                    </div>
                </div>
                <hr></hr>
                <div className={cn('main-content')}>
                    <div className={cn('main-content-group')} id='content2'>
                        <div className={cn('main-content-group-text')}>
                            <p>TimeZone</p>
                        </div>
                        <CustomSelect />
                    </div>
                </div>
                <hr></hr>
                <div className={cn('main-content')}>
                    <div className={cn('main-content-group')} id='content2'>
                        <div className={cn('main-content-group-text')}>
                            <h3>Bio</h3>
                            <p>Write a short introduction.</p>
                        </div>

                        <input
                            className={cn('main-content-group-introduction')}
                            placeholder="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
                        />
                    </div>
                </div>
                <hr></hr>
                <div className={cn('main-content')}>
                    <div className={cn('main-content-group')} id='content2'>
                        <div className={cn('main-content-group-text')}>
                            <h3>Portfolio Projects</h3>
                            <p>Share a few snippets of your work.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
