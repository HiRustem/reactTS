import React from 'react'

import { LabelInputProps } from "./models/interfaces"

import { useOnChange } from '../Form/hooks/inputOnChange'
import { FormInputType } from '../Form/models/interfaces'

const LabelInput = ({ formInput }: LabelInputProps) => {

    const { inputId, inputText, inputValue, inputPlaceholder } = formInput as FormInputType

    const onChange = useOnChange()

    return (
        <label className='labelInputContainer'>
            <p className='labelInputText'>{inputId + 1}. {inputText}</p>

            <input className='labelInput' type='text' placeholder={inputPlaceholder} value={inputValue} onChange={(e) => onChange(inputId, e)} />

        </label>
    )
}

export default React.memo(LabelInput)