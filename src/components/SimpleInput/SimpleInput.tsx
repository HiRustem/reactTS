import React from 'react'

import { SimpleInputProps } from './models/interfaces'

const SimpleInput = ({ id, name, value, onChange }: SimpleInputProps) => {
    return (
        <input className='simpleInput' type='text' placeholder={name} value={value} onChange={(e) => onChange(id, e)} />
    )
}

export default SimpleInput