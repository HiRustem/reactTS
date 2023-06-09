import { useCallback } from 'react'

import { useAppDispatch } from '../../../app/hooks'
import { setForm } from '../../../app/slices/formSlice'
import { TablePopupInputsValues } from '../../Table/components/TablePopup/models/interfaces'


export const useOnChange = () => {

    const dispatch = useAppDispatch()

    return useCallback((inputId: number, event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {

        const value = event.target.value

        dispatch(setForm({
            inputId,
            inputValue: value,
        }))
    }, [])

}