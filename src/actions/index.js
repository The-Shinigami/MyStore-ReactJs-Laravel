export const login = () => {
    return {
        type: 'LOGIN'
    }
}
export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}
export const setPage = (page) => {
    return {
        type: 'SET_PAGE',
        page: page
    }
}