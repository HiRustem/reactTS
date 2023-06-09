import React from 'react'

import { TableBodyProps } from './models/interfaces'
import TableRow from '../TableRow/TableRow'

const TableBody = ({ data }: TableBodyProps) => {
    return (
        <tbody>
            {
                data.map((row, index) => (
                    <TableRow key={index} columns={row} />
                ))
            }
        </tbody>
    )
}

export default TableBody