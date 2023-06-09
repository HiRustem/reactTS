import { useAppSelector } from '../../../app/hooks'

import { MainForm } from '../../../components'

import { useEffect, useState } from 'react'

import { inputsData } from '../data/data'

import { getInputs } from '../../../components/Form/helpers/getInputs'
import { FormInputObject } from '../../../components/Form/models/interfaces'
import { useFormSelector } from '../../../app/hooks/useFormSelector'
import { useInitForm } from '../../../components/Form/hooks/useInitForm'

const Form = () => {
    console.log('Ререндер Form')
    
    const formSelector = useFormSelector()
    const initForm = useInitForm(inputsData)
    
    const [inputs, setInputs] = useState<FormInputObject[]>([])

    const form = formSelector()

    useEffect(() => {
        initForm()
    }, [])

    useEffect(() => {
        const inputs = getInputs(form, inputsData)

        setInputs(inputs)
    }, [form])

    return (
        <div>
            <MainForm inputs={inputs} />
        </div>
    )
}

export default Form