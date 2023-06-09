import { useCallback } from 'react'

import { useAppSelector } from '../hooks'

export const useFormSelector = () => {

    const { form } = useAppSelector(state => state.form)

    const formSelector = useCallback(() => {
        return form
    }, [form])

    return formSelector
}