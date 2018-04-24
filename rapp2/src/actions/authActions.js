export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const setAuthOn = () => ({
  type: LOGIN
})

export const setAuthOff = () => ({
  type: LOGOUT
})
