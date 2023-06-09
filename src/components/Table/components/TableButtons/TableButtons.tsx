import React from 'react'
import { TableButtonsProps } from './models/interfaces'

const TableButtons = ({ open, remove }: TableButtonsProps) => {
    return (
        <div className='form'>
            <button className='btn mr-2' onClick={open}>Добавить</button>
            <button className='btn' onClick={remove}>Удалить</button>
        </div>
    )
}

export default TableButtons