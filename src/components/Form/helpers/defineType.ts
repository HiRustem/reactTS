import { FormInputObject, FormInputType } from "../models/interfaces";

export const isFormInput = (input: FormInputObject): input is FormInputType => {
    return (input as FormInputType).inputType === 'input'
}