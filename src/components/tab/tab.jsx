import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import './tab.scss';
export const TabsContainer = () => {
    return (
        <Tabs className='tabs'>
            <TabList>
                <Tab className='tab'>My details</Tab>
                <Tab className='tab'>Profile</Tab>
                <Tab className='tab'>Password</Tab>
                <Tab className='tab'>Team</Tab>
                <Tab className='tab'>Plan</Tab>
                <Tab className='tab'>Billing</Tab>
                <Tab className='tab'>Email</Tab>
                <Tab className='tab'>Notifications</Tab>
                <Tab className='tab'>Integrations</Tab>
                <Tab className='tab'>API</Tab>
            </TabList>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel>
                <div></div>
            </TabPanel>
        </Tabs>
    );
};
