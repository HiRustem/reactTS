import { FormInputObject } from '../../Form/models/interfaces'

export interface TableColumn {
    columnId: number
    columnText: string
}

export interface TableProps {
    formTable: FormInputObject
}