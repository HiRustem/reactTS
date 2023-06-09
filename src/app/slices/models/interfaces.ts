import { TablePopupInputsValues } from '../../../components/Table/components/TablePopup/models/interfaces'
import { TableColumn } from '../../../components/Table/models/interfaces'

export interface AnswersObject {
    [key: string]: number[]
}

export interface FormObject {
    [key: string]: string | TableColumn[][]
}

export interface FormInput {
    inputId: number
    inputValue: string | TablePopupInputsValues
}