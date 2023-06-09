import { TablePopupInputsValues } from '../../TablePopup/models/interfaces'

export interface TableButton {
    (): void
}

export interface TableAddFunction {
    (inputsValues: TablePopupInputsValues): void
}

export interface TableDeleteFunction {
    (): void
}


export interface TableButtonsObject {
    addFunction: TableAddFunction
    deleteFunction: TableDeleteFunction
}

export interface TableButtonsProps {
    open: TableButton
    remove: TableDeleteFunction | undefined
}