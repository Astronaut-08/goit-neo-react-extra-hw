// файл слайсу для контактів
import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";


const initialState = {
    user: {
        name: null,
        email: null
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) =>{
        builder
            .addCase(register.fulfilled , (state, {payload}) => {
                state.user = payload.user
                state.token = payload.token
                state.isLoggedIn = true
            })
            .addCase(login.fulfilled , (state, {payload}) => {
                state.user = payload.user
                state.token = payload.token
                state.isLoggedIn = true
            })
            .addCase(logout.fulfilled , (state, {payload}) => {
                state.user = {name: '', email: ''}
                state.token = null
                state.isLoggedIn = false
            })
            .addCase(refreshUser.pending, (state) => {
                state.refreshUser = true
            })
            .addCase(refreshUser.fulfilled, (state, { payload }) => {
                state.user = payload
                state.isLoggedIn = true
                state.isRefreshing = false
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false
            })
    }
})

export default authSlice.reducer
