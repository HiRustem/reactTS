import { useCallback, useState, useEffect } from 'react'

import { TableButtonsObject } from '../models/interfaces'

import { useAppDispatch } from '../../../../../app/hooks'
import { TablePopupInputsValues } from '../../TablePopup/models/interfaces'
import { deleteForm, setForm } from '../../../../../app/slices/formSlice'

export const useTableButtons = (tableId: number, close: () => void): () => TableButtonsObject => {

    const dispatch = useAppDispatch()

    const addFunction = useCallback((inputValues: TablePopupInputsValues) => {
        dispatch(setForm({
            inputId: tableId,
            inputValue: inputValues,
        }))
        
        close()
    }, [])

    const deleteFunction = useCallback(() => {
        dispatch(deleteForm(tableId))
    }, [])

    const getTableButtons = useCallback((): TableButtonsObject => {
    
        const buttons = {
            addFunction,
            deleteFunction,
        }
    
        return buttons
    }, [])

    return getTableButtons

}