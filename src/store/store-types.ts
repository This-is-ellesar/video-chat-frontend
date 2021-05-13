export interface IAuthState {
    user: User | null
    token: string | null,
    isAuthtentificated: boolean | null,
    isFetching: boolean | null,
}

export interface IBaseState {
    snackbar: Snackbar
}

export interface User {
    _id: string
    name: string
    surname: string
    roles: string[]
    nickname: string
}

export interface Snackbar {
    type: string 
    message: string
    show: boolean
}