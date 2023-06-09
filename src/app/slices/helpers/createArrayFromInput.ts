import { TablePopupInputsValues } from '../../../components/Table/components/TablePopup/models/interfaces'
import { TableColumn } from '../../../components/Table/models/interfaces'

export const createArrayFromInput = (inputValue: TablePopupInputsValues) => {
    const arrayValues: TableColumn[] = []

    console.log(inputValue)

    for (let key in Object.keys(inputValue)) {
        arrayValues.push({
            columnId: +key,
            columnText: inputValue[key],
        })
    }
    console.log(arrayValues)
    return arrayValues
}