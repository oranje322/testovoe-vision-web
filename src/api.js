import axios from "axios";


export const hangToken = () => {
    if (localStorage.hasOwnProperty('access')) {
        axios.interceptors.request.use(
            config => {
                config.headers.Authorization = `Bearer ${localStorage.access}`
                return config
            },
            error => {
                return Promise.reject(error)
            }
        )
    }
}



export const signUp = async (data) => {
    return await axios.post('http://erp.apptrix.ru/api/clients/create/', {
        user: {
            email: data.email,
            password: data.password
        },
        phone: '',
        invited_by: data.invited_by,
        name: data.name,
        surname: data.surname,
        country_key: data.country_key
    })
}

export const auth = async (data) => {
    return await axios.post('http://erp.apptrix.ru/api/clients/token/', {
        username: data.email,
        password: data.password
    })
}

export const refreshToken = async (refreshToken) => {
    return await axios.post('http://erp.apptrix.ru/api/clients/token/refresh/', {
        refresh: refreshToken
    })
}

export const getUserData = async (client_id) => {
    return await axios.get(`http://erp.apptrix.ru/api/clients/${client_id}/`)
}