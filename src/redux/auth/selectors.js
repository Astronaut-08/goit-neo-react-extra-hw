// Selectors

export const selectUser = (state) => state.auth.user

export const selectToken = (state) => state.auth.token

export const selectSiLoggedIn = (state) => state.auth.isLoggedIn

export const selectIsRefreshing = (state) => state.auth.isRefreshing