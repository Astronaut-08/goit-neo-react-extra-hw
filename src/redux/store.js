// файл створення стору
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsSlice from './contacts/slice'
import filtersSlice from './filters/slice'
import authSlice from './auth/slice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'

 // Кастомний сторедж
const storage = {
    getItem: (el) => Promise.resolve(localStorage.getItem(el)),
    setItem: (el, item) => Promise.resolve(localStorage.setItem(el, item)),
    removeItem: (el) => Promise.resolve(localStorage.removeItem(el))
}

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    contacts: contactsSlice,
    filters: filtersSlice,
    auth: authSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export const persistor = persistStore(store)
