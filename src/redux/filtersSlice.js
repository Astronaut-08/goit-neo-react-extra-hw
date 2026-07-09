//  файл слайсу для фільтрів
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: ''
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter(state, {payload}) {
            state.name = payload
        }
    }
})

export const {changeFilter} = filtersSlice.actions
export default filtersSlice.reducer

// Selectors
export const selectNameFilter = (state) => state.filters.name
