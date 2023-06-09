import { CheckboxVariant } from '../../CheckboxTest/models/interfaces'
import { LabelSelectOption } from '../../LabelSelect/models/interfaces'
import { TableColumn } from '../../Table/models/interfaces'

export interface MainFormProps {
    inputs: FormInputObject[]
}

export interface FormInputType {
    inputType: string
    inputId: number
    inputText: string
    inputValue: string
    inputPlaceholder: string
}

export interface FormSelectOption {
    id: number
    value: string
}

export interface FormSelectType {
    inputType: string
    inputId: number
    inputText: string
    inputValue: string
    inputOptions: FormSelectOption[]
}

export interface FormTextareaType {
    inputType: string
    inputId: number
    inputText: string
    inputValue: string
}

export interface FormCheckboxVariant {
    variantId: number
    variantText: string
}

export interface FormCheckboxType {
    inputType: string
    inputId: number
    inputText: string
    inputQuantity: number
    inputVariants: FormCheckboxVariant[]
}

export interface FormTableType {
    inputType: string
    inputId: number
    inputText: string
    inputHeader: TableColumn[]
    inputDatas: TableColumn[][]
}

export type FormInputObject = FormInputType | FormSelectType | FormTextareaType | FormCheckboxType | FormTableType 

export interface FormInput {
    
}

export interface InputDataObject {
    inputId: number
    inputText: string
    inputType: string
    inputPlaceholder?: string
    inputOptions?: LabelSelectOption[]
    inputQuantity?: number
    inputVariants?: CheckboxVariant[]
    inputHeader?: TableColumn[]
    inputData?: TableColumn[][] | undefined | string
}