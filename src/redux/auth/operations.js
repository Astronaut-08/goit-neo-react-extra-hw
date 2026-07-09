import axios from "axios";
import { applyMiddleware, createAsyncThunk } from "@reduxjs/toolkit";

// add JWT
const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

// remove JWT
const clearAuthHeader = () => {
    delete axios.defaults.headers.common.Authorization
}

axios.defaults.baseURL = 'https://connections-api.goit.global'

// body: {name, email, password}
export const register = createAsyncThunk(
    'auth/register',
    async (newData, thunkAPI) => {
        try {
            const {data} = await axios.post('/users/signup', newData)
            setAuthHeader(data.token)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

// body: {email, password}
export const login = createAsyncThunk(
    'auth/login',
    async (newData, thunkAPI) => {
        try {
            const {data} = await axios.post('/users/login', newData)
            setAuthHeader(data.token)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

// Just logout
export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout')
            clearAuthHeader()
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

// checkAuth
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState()
        const token = state.auth.token

        if (token === null) {
            return thunkAPI.rejectWithValue('No token')
        }
        try {
            const state = thunkAPI.getState()
            const token = state.auth.token
            setAuthHeader(token)
            const {data} = await axios.get('/users/current')
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)
