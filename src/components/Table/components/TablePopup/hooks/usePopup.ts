import { useCallback, useState } from 'react'
import { PopupHook } from '../models/interfaces'

export const usePopup = (): PopupHook => {
    console.log('usePopup')
    const [isOpen, setIsOpen] = useState(false)

    const open = () => {
        setIsOpen(true)
    }

    const close = () => {
        setIsOpen(false)
    }

    return {
        isOpen,
        open,
        close,
    }
}