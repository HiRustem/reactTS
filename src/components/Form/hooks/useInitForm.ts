import { useCallback } from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { initString, initTable } from '../../../app/slices/formSlice'
import { InputDataObject } from '../models/interfaces'

export const useInitForm = (inputsData: InputDataObject[]): () => void => {

    const dispatch = useAppDispatch()
    
    const initForm = useCallback(() => {
        for (let i = 0; i < inputsData.length; i++) {
            if (inputsData[i].inputType === 'input' || inputsData[i].inputType === 'textarea' || inputsData[i].inputType === 'select') {
                dispatch(initString(i))
            }
    
            if (inputsData[i].inputType === 'table') {
                dispatch(initTable(i))
            }
        }
    }, [])

    return initForm
}