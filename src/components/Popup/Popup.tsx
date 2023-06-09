import React from 'react'
import { PopupProps } from './models/interface'

const Popup = ({ isOpen, children }: PopupProps) => {
    console.log(isOpen)
    return (
        <div className={`${isOpen ? 'flex' : 'hidden'} popup`}>
            {children}
        </div>
    )
}

export default React.memo(Popup)