// файл створення стору
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsSlice from './contacts/slice'
import filtersSlice from './filters/slice'
import authSlice from './auth/slice'


const rootReducer = combineReducers({
    contacts: contactsSlice,
    filters: filtersSlice,
    auth: authSlice
})

export const store = configureStore({
    reducer: rootReducer
})
