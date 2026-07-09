import axios from "axios";
import { applyMiddleware, createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.goit.global/users'

// add JWT
const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

// remove JWT
const crearAuthHeader = () => {
    delete axios.defaults.headers.common.Authorization
}

// body: {name, email, password}
export const register = createAsyncThunk(
    'auth/register',
    async (newData, thunkAPI) => {
        try {
            const {data} = await axios.post('/signup', newData)
            setAuthHeader(data.token)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

// body: {email, password}
export const login = createAsyncThunk(
    'auth/login',
    async (newData, thunkAPI) => {
        try {
            const {data} = await axios.post('/login', newData)
            setAuthHeader(data.token)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

// Just logout
export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/logout')
            crearAuthHeader()
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

// checkAuth
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        try {
            const state = thunkAPI.getState()
            const token = state.auth.token
            setAuthHeader(token)
            const {data} = await axios.get('/current')
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    },
    {condition: (_, thunkAPI) => {
        const state = thunkAPI.getState()
        const token = state.auth.token
        return token !== null
    }}
)
