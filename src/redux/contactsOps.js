import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://6a4e0062e785c9ef536c1c05.mockapi.io'

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await axios.get('/contacts')
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        } 
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newData, thunkAPI) => {
        try {
            const {data} = await axios.post('/contacts', newData)
        return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        } 
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try{
            const {data} = await axios.delete(`/contacts/${id}`)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        } 
    }
)
