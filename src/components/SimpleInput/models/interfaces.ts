import { TablePopupInputObject, TablePopupInputsValues } from '../../Table/components/TablePopup/models/interfaces'

import { TableColumn } from '../../Table/models/interfaces'

export interface SimpleInputProps {
    id: number
    name: string
    value: string
    onChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface SimpleInputsModuleProps {
    inputsArray: TablePopupInputObject[]
    inputsValues: TablePopupInputsValues
    onChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void
}