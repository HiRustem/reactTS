import React, { useState, useCallback } from 'react'

import { TableColumn } from '../../../models/interfaces'

import { TablePopupInputObject, TablePopupInputs } from '../models/interfaces'

export const useTablePopupInputs = (inputs: TableColumn[]): () => TablePopupInputs => {

    const inputsArray: TablePopupInputObject[] = []

    const getTableInputs = useCallback((): TablePopupInputs => {
    
        if (typeof inputs === 'undefined') return {
            inputsArray: [],
        }
    
        for (let i = 0; i < inputs?.length; i++) {
    
            const currentInput = inputs[i]

    
            inputsArray.push({
                inputId: currentInput.columnId,
                inputText: currentInput.columnText,
            })
            
        }

        const popupInputs = {
            inputsArray: inputsArray,
        }
    
        return popupInputs
    }, [])

    return getTableInputs

}