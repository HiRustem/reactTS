import React from 'react'

import { CheckboxQuestionProps, CheckboxVariant } from './models/interfaces'

import Checkbox from './Checkbox'

const CheckboxQuestion = ({ question }: CheckboxQuestionProps) => {

    console.log('Ререндер CheckboxQuestion')

    return (
        <div className='checkboxQuestion'>
            <h1 className='checkboxQuestionHeader'>{question.questionId + 1}. {question.questionText}</h1>

            <ul className='checkboxQuestionList'>
                {
                    question.variants ?

                        question.variants.map((variant: CheckboxVariant) => (
                            <Checkbox key={variant.variantId} variant={variant} question={question} />
                        ))

                    :

                        null
                }
            </ul>
        </div>
    )
}

export default React.memo(CheckboxQuestion)