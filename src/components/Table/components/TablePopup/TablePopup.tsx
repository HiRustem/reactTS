import React, { useEffect, useState } from 'react'

import { TablePopupInputs, TablePopupProps } from './models/interfaces'

import { useTablePopupInputs } from './hooks/useTablePopupInputs'

import SimpleInputsModule from '../../../SimpleInput/SimpleInputsModule'
import { useSimpleInputFunction } from '../../../SimpleInput/hooks/useSimpleInputFunction'

const TablePopup = ({ add, close, inputs }: TablePopupProps) => {

    const getTableInputs = useTablePopupInputs(inputs)

    const { inputsValues, onChange } = useSimpleInputFunction()

    const [popupInputs, setPopupInputs] = useState<TablePopupInputs>()

    useEffect(() => {
        const result = getTableInputs()

        setPopupInputs(result)
    }, [])


    return (
        <div className='popupChildren'>

            {
                popupInputs ?

                    <SimpleInputsModule inputsArray={popupInputs.inputsArray} inputsValues={inputsValues} onChange={onChange} />
                :

                    null
            }

            <div className='form'>
                <button className='btn mr-2' onClick={() => add(inputsValues)}>Сохранить</button>
                <button className='btn' onClick={close}>Закрыть</button>
            </div>
        </div>
    )
}

export default React.memo(TablePopup)