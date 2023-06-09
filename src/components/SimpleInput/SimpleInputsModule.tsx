import React from 'react'

import SimpleInput from './SimpleInput'

import { SimpleInputsModuleProps } from './models/interfaces'
import { useSimpleInputFunction } from './hooks/useSimpleInputFunction'

const SimpleInputsModule = ({ inputsArray, inputsValues, onChange }: SimpleInputsModuleProps ) => {

    return (
        <div className='simpleInputsModule'>
            {
                inputsArray.map((input) => (
                    <SimpleInput key={input.inputId} id={input.inputId} name={input.inputText} value={inputsValues[input.inputId]} onChange={onChange} />
                ))
            }
        </div>
    )
}

export default SimpleInputsModule