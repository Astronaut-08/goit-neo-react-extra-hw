// файл слайсу для контактів
import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const handlePending = (state) => {
    state.loading = true;
}

const handleRejected = (state, {payload}) => {
    state.loading = false
    state.error = payload
}

const initialState = {
    items: [],
    loading: false,
    error: null
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) =>{
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled , (state, {payload}) => {
                state.loading = false
                state.error = null
                state.items = payload
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled , (state, {payload}) => {
                state.loading = false
                state.error = null
                state.items.push(payload)
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled , (state, {payload}) => {
                state.loading = false
                state.error = null
                state.items = state.items.filter(
                    (contact) => contact.id !== payload.id
                )
            })
            .addCase(deleteContact.rejected, handleRejected)
    }
})

export default contactsSlice.reducer

// Selectors
export const selectContacts = (state) => state.contacts.items

export const selectLoading = (state) => state.contacts.loading

export const selectError = (state) => state.contacts.error

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, nameFilter) => {
        return contacts.filter(cont => cont.name.toLowerCase().includes(nameFilter.toLowerCase()))
    }
)
