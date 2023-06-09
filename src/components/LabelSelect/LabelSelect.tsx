import React from 'react'

import { LabelSelectProps } from './models/interfaces'

import { useOnChange } from '../Form/hooks/inputOnChange'
import { FormSelectType } from '../Form/models/interfaces'

const LabelSelect = ({ formSelect }: LabelSelectProps) => {

    const { inputId, inputText, inputOptions } = formSelect as FormSelectType

    const onChange = useOnChange()

    return (
        <label className='labelInputContainer'>
            <p className='labelInputText'>{inputId + 1}. {inputText}</p>
            
            <select className='labelInput' onChange={(e) => onChange(inputId, e)}>
                {
                    inputOptions.map((option) => (
                        <option key={option.id} value={option.value}>{option.value}</option>
                    ))
                }
            </select>
        </label>
    )
}

export default React.memo(LabelSelect)