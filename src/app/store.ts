import { configureStore } from '@reduxjs/toolkit'

import nameSlice from './slices/nameSlice'
import testSlice from './slices/testSlice'

import formSlice from './slices/formSlice'


export const store = configureStore({
    reducer: {
        name: nameSlice,
        test: testSlice,
        form: formSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch