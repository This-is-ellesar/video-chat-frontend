import { $axios } from '../../http/axios-config'
import { setUser } from '../auth'

export const login = async (name: string, password:string) => {
    return async ( dispatch: any ) => {
        try {
            const { data } = await $axios.post('/auth/login/', {
                name,
                password
            })
            
            localStorage.setItem('token', data.token)
            dispatch(setUser(data))
        } catch (error) {
            throw error
        }
    }
}