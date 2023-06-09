import { useCallback } from 'react'

import { TablePopupInputsValues } from '../../Table/components/TablePopup/models/interfaces'


export const useSimpleInputFunction = () => {

    const inputsValues: TablePopupInputsValues = {}

    const onChange = useCallback((index: number, event: React.ChangeEvent<HTMLInputElement>) => {

        if (typeof inputsValues[index] === 'undefined') inputsValues[index] = ''

        inputsValues[index] = event.target.value
    }, [inputsValues])

    const values = {
        inputsValues,
        onChange,
    }

    return values
}