import React from 'react';
import { classname } from 'utils';

import './table-head.scss';

const cn = classname('th');

export const TableHead = ({ item }) => {
    return <th title={item}>{item}</th>;
};
