import { React, useState } from 'react';
import { classname } from 'utils';

import './tab.scss';
const cn = classname('tabs');

export const TabsContainer = ({ tabsData }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = index => {
        setActiveTab(index);
    };

    return (
        <div className={cn()}>
            <div className={cn('buttons')}>
                {tabsData.map((tab, index) => (
                    <button key={index} className={cn(`tab ${index === activeTab ? 'active' : ''}`)} onClick={() => handleTabClick(index)}>
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className={cn('content')}>{tabsData[activeTab].content}</div>
        </div>
    );
};
