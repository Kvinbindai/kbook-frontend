const saveTokenToLocalStorage = (token) => {
    return localStorage.setItem('accessToken',token)
}

const deleteToken = () => {
    return localStorage.removeItem('accessToken')
}

const getTokenFromLocal = () => {
    return localStorage.getItem('accessToken')
}

export { saveTokenToLocalStorage , deleteToken  ,getTokenFromLocal }