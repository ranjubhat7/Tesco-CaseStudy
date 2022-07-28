export const getLoginStatus=(state)=>{
    return state.user.response
}

export const getLoginLoading=(state)=>{
    return state.user.loginLoading
}

export const getLoginError=(state)=>{
    return state.user.loginError
}
