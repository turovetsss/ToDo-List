import React from 'react';
import { PageBtn } from 'components/page-btn/page-btn';
import { Table } from 'components/table';
import { TableTitle } from 'components/title-table/title-table';
import { classname } from 'utils';

import './table.scss';
const cn = classname('table');

export const TablePage = () => {
    return (
        <div>
            <TableTitle></TableTitle>
            <Table></Table>
            <PageBtn></PageBtn>
        </div>
    );
};
