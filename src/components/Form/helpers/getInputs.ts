import { FormObject } from '../../../app/slices/models/interfaces'
import { TableColumn } from '../../Table/models/interfaces'

import { FormInputType, FormInputObject, InputDataObject, FormSelectType, FormTextareaType, FormCheckboxType, FormTableType } from '../models/interfaces'

export const getInputs = (form: FormObject, inputsData: InputDataObject[]): FormInputObject[] => {

    const inputs: FormInputObject[] = []

    for (let i = 0; i < inputsData.length; i++) {

        if (inputsData[i].inputType === 'input') {

            const newObject: FormInputType = {
                inputType: inputsData[i].inputType,
                inputId: i,
                inputText: inputsData[i].inputText,
                inputValue: form[i] as string,
                inputPlaceholder: (inputsData[i] as FormInputType).inputPlaceholder,
            }
 
            inputs.push(newObject)
        }

        if (inputsData[i].inputType === 'select') {

            const newObject: FormSelectType = {
                inputType: inputsData[i].inputType,
                inputId: i,
                inputText: inputsData[i].inputText,
                inputValue: form[i] as string,
                inputOptions: (inputsData[i] as FormSelectType).inputOptions,
            }

            inputs.push(newObject)
        }

        if (inputsData[i].inputType === 'textarea') {
            const newObject: FormTextareaType = {
                inputType: inputsData[i].inputType,
                inputId: i,
                inputText: inputsData[i].inputText,
                inputValue: form[i] as string,
            }

            inputs.push(newObject)
        }

        if (inputsData[i].inputType === 'checkbox') {
            const newObject: FormCheckboxType = {
                inputType: inputsData[i].inputType,
                inputId: i,
                inputText: inputsData[i].inputText,
                inputQuantity: (inputsData[i] as FormCheckboxType).inputQuantity,
                inputVariants: (inputsData[i] as FormCheckboxType).inputVariants,
            }

            inputs.push(newObject)
        }

        if (inputsData[i].inputType === 'table') {

            const newObject: FormTableType = {
                inputType: inputsData[i].inputType,
                inputId: i,
                inputText: inputsData[i].inputText,
                inputHeader: (inputsData[i] as FormTableType).inputHeader,
                inputDatas: form[i] as TableColumn[][],
            }

            inputs.push(newObject)
        }
    }

    console.log('Рендер')

    return inputs
}