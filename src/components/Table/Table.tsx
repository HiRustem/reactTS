import React, { useState, useEffect } from 'react'

import { TableProps } from './models/interfaces'

import { TableBody, TableHead, TableButtons, TablePopup } from './index'

import Popup from '../Popup/Popup'

import { useTableButtons } from './components/TableButtons/hooks/useTableButtons'
import { TableButtonsObject } from './components/TableButtons/models/interfaces'
import { usePopup } from './components/TablePopup/hooks/usePopup'
import { FormTableType } from '../Form/models/interfaces'

const Table = ({ formTable }: TableProps) => {

    const { inputId, inputText, inputHeader, inputDatas } = formTable as FormTableType

    const { isOpen, open, close } = usePopup()

    const getTableButtons = useTableButtons(inputId, close)

    const [buttons, setButtons] = useState<TableButtonsObject>()

    useEffect(() => {
        const buttons = getTableButtons()

        setButtons(buttons)
    }, [])

    return (
        <div className='tableContainer'>
            <table className='table'>

                <caption className='labelInputText'>{inputId + 1}. {inputText}</caption>

                <TableHead headerRow={inputHeader} />

                <TableBody data={inputDatas} />

            </table>

            {
                buttons ?

                    <Popup
                        isOpen={isOpen} 
                        children={
                            <TablePopup
                                add={buttons.addFunction} 
                                close={close}
                                inputs={inputHeader}
                            />
                        }
                    />

                :

                    null
            }

            <TableButtons open={open} remove={buttons?.deleteFunction}/>
        </div>
    )
}

export default React.memo(Table)