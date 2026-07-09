// файл створення стору
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsSlice from './contactsSlice'
import filtersSlice from './filtersSlice'


const rootReducer = combineReducers({
    contacts: contactsSlice,
    filters: filtersSlice
})

export const store = configureStore({
    reducer: rootReducer
})
