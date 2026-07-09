import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://connections-api.goit.global'

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
