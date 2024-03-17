import React from 'react';
import { PageBtn } from 'components/page-btn/page-btn';
import { Table } from 'components/table';
import { tbodyData } from 'components/table-cell/data';
import { TableTitle } from 'components/title-table';

import './table.scss';

export const TablePage = () => {
    const theadData = ['Name', 'Status', 'Role', 'Email addres', 'Team', ''];

    return (
        <div>
            <TableTitle></TableTitle>
            <Table theadData={theadData} tbodyData={tbodyData} />
            <PageBtn></PageBtn>
        </div>
    );
};
