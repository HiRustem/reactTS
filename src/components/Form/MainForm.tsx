import React from 'react'

import { FormCheckboxType, MainFormProps } from './models/interfaces' 
import LabelInput from '../LabelInput/LabelInput'
import LabelSelect from '../LabelSelect/LabelSelect'
import LabelTextarea from '../LabelTextarea/LabelTextarea'
import { CheckboxQuestion } from '../CheckboxTest'
import Table from '../Table/Table'

const MainForm = ({ inputs }: MainFormProps) => {
    
    console.log('Ререндер MainForm')

    return (
        <div className='semiContainer'>
            {
                inputs.map((input) => (
                    input.inputType === 'input' ?

                        <LabelInput
                            key={input.inputId}
                            formInput={input}
                        />

                    :

                    input.inputType === 'select' ?

                        <LabelSelect 
                            key={input.inputId}
                            formSelect={input}
                        />

                    :

                    input.inputType === 'textarea' ?

                        <LabelTextarea 
                            key={input.inputId}
                            formTextarea={input}
                        />

                    :

                    input.inputType === 'checkbox' ?

                        <CheckboxQuestion 
                            key={input.inputId}

                            question={{
                                questionId: input.inputId,
                                questionText: input.inputText,
                                questionQuantity: (input as FormCheckboxType).inputQuantity,
                                variants: (input as FormCheckboxType).inputVariants,
                            }}
                        />

                    :

                    input.inputType === 'table' ?

                            <Table 
                                key={input.inputId}
                                formTable={input}
                            />

                    :

                        null
                ))
            }
        </div>
    )
}

export default React.memo(MainForm)