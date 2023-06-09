import React from 'react'

import { TableRowProps } from './models/interfaces'

const TableRow = ({ columns }: TableRowProps) => {
    return (
        <tr>
            {
                columns?.map((column) => (
                    <td className='tableColumn' key={column.columnId}>{column.columnText}</td>
                ))
            }
        </tr>
    )
}

export default React.memo(TableRow)