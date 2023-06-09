import { TableColumn } from '../../../models/interfaces'

import { TableAddFunction } from '../../TableButtons/models/interfaces'

export interface CloseButton {
    (): void
}

export interface AddButton {
    (): void
}

export interface PopupHook {
    isOpen: boolean
    open: () => void
    close: () => void
}

export interface TablePopupProps {
    add: TableAddFunction
    close: CloseButton | undefined
    inputs: TableColumn[]
}

export interface TablePopupInputsValues {
    [key: string]: string
}

export interface TablePopupInputObject {
    inputId: number
    inputText: string
}

export interface TablePopupInputs {
    inputsArray: TablePopupInputObject[]
}