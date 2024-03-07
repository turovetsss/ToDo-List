import { React, useState } from 'react';
import { classname } from 'utils';

import { items } from './data';

import './select.scss';
const cn = classname('dropdown');

export const CustomSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectItem = item => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <div className={cn()}>
            <div className={cn('selected')} onClick={toggleDropdown}>
                {selectedItem && <img src={selectedItem.image} alt={selectedItem.label} />}
                {selectedItem ? selectedItem.label : 'Select an item'}
            </div>
            {isOpen && (
                <div className={cn('menu')}>
                    {items.map(item => (
                        <div key={item.id} onClick={() => selectItem(item)}>
                            <img src={item.image} alt={item.label} />
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
