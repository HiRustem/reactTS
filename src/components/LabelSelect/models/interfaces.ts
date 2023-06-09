import { FormInputObject } from '../../Form/models/interfaces'

export interface LabelSelectOption {
    id: number
    value: string
}

export interface LabelSelectProps {
    formSelect: FormInputObject
}