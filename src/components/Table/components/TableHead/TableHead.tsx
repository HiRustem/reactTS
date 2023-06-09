import React from 'react'

import { TableHeaderProps } from './models/interfaces'

import TableRow from '../TableRow/TableRow'

const TableHead = ({ headerRow }: TableHeaderProps) => {

    return (
        <thead>
            <TableRow columns={headerRow} />
        </thead>
    )
}

export default React.memo(TableHead)