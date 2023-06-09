import React, { useRef, useEffect } from 'react'

import { LabelTextareaProps } from './models/interfaces'

import { useOnChange } from '../Form/hooks/inputOnChange'
import { FormTextareaType } from '../Form/models/interfaces'

const LabelTextarea = ({ formTextarea }: LabelTextareaProps) => {

    const { inputId, inputText, inputValue } = formTextarea as FormTextareaType

    const onChange = useOnChange()

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = '0px'

            const scrollHeight = textareaRef.current.scrollHeight
            textareaRef.current.style.height = scrollHeight + 'px'
        }
    }, [inputValue])

    return (
        <label className='labelTextareaContainer'>
            <p className='labelTextareaText'>{inputId + 1}. {inputText}</p>

            <textarea className='labelTextarea' ref={textareaRef} value={inputValue} onChange={(e) => onChange(inputId, e)} />

        </label>
    )
}

export default LabelTextarea