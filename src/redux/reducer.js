import {auth, getUserData, hangToken, refreshToken, signUp} from "../api";

const SET_AUTH = 'SET_AUTH'
const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
    isAuth: false,
    userData: {}
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH: {
            return {
                ...state,
                isAuth: true,
            }
        }
        case SET_USER_DATA: {
            return {
                ...state,
                userData: action.payload
            }
        }

        default:
            return state
    }
}

export default reducer


const setAuthAC = (payload) => ({type: SET_AUTH, payload})
const setUserData = (payload) => ({type: SET_USER_DATA, payload})

export const signUpThunk = (data) => {
    return async (dispatch) => {
        try {
            hangToken()
            let response = await signUp(data)

            console.log(response)
            if (response.status === 201) {
                alert('Вы успешно зарегистрировались')
                window.location = '/login'
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const loginThunk = (data) => {
    return async (dispatch) => {
        try {
            hangToken()
            let response = await auth(data)


            if (response.status === 200) {
                dispatch(setAuthAC(response.data))
                localStorage.setItem('access', response.data.access)
                localStorage.setItem('client_id', response.data.client_id)
                localStorage.setItem('refresh', response.data.refresh)
                localStorage.setItem('username', response.data.username)
            }

            if (response.status === 401) {
                debugger
                console.log('hello')
            }

        } catch (error) {
            if (error.response.status === 401 && localStorage.refresh) {
                await refreshToken(localStorage.getItem('refresh'))
                    .then(response => {
                        localStorage.setItem('access', response.data.access)
                    })
                    .catch(error => {
                        localStorage.clear()
                        // window.location = '/login'
                    })
            }
        }
        //
        // console.log(error.response);
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers)
    }
}

export const getUserDataThunk = () => {
    return async (dispatch) => {
        try {
            hangToken()
            let response = await getUserData(localStorage.getItem('client_id'))
            dispatch(setUserData(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}