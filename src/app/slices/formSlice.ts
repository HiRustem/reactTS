import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

import { FormInput, FormObject } from './models/interfaces'
import { TableColumn } from '../../components/Table/models/interfaces'
import { createArrayFromInput } from './helpers/createArrayFromInput'

interface FormState {
    form: FormObject
}

const initialState: FormState = {
    form: {}
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        initString: (state, action: PayloadAction<number>) => {
            const index = action.payload

            const form = {...state.form}
            form[index] = ''

            state.form = form
        },
        initTable: (state, action: PayloadAction<number>) => {
            const index = action.payload

            const form = {...state.form}
            form[index] = []

            state.form = form
        },
        setForm: (state, action: PayloadAction<FormInput>) => {

            const { inputId, inputValue } = action.payload

            const newForm = {...state.form}

            if (inputValue && typeof inputValue === 'object') {

                if (!newForm[inputId]) newForm[inputId] = []

                const newTableArray = newForm[inputId] as TableColumn[][]

                const newInputArray = createArrayFromInput(inputValue)
                newTableArray.push(newInputArray)

                newForm[inputId] = newTableArray
            } else {
                if (!newForm[inputId]) newForm[inputId] = ''

                newForm[inputId] = inputValue
            }

            state.form = newForm
        },
        deleteForm: (state, action: PayloadAction<number>) => {
            const tableId = action.payload

            const newForm = {...state.form}

            const newArray = newForm[tableId] as TableColumn[][]

            newArray.pop()

            state.form = newForm
        },
    },
})

export const { initString, initTable, setForm, deleteForm } = formSlice.actions

export default formSlice.reducer