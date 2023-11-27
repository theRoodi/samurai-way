import {Dispatch} from 'redux';
import {authAPI, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

export type InitialStateType = typeof initialState

export type UserActionType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
}

export type DataActionType = {
    type: 'auth/SET-USER-DATA'
    payload: UserActionType
}
export type CaptchaActionType = {
    type: 'auth/GET-CAPTCHA-URL',
    payload: any
}
export type ActionType = DataActionType | CaptchaActionType


const SET_USER_DATA = 'auth/SET-USER-DATA'
const GET_CAPTCHA_URL = 'auth/GET-CAPTCHA-URL'

const initialState = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false,
    captchaURL: ''
}
export const authReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case GET_CAPTCHA_URL:
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => (
    {type: SET_USER_DATA, payload: {userId, email, login, isAuth}} as const
)
export const setCaptchaURL = (captchaURL: string) => (
    {type: GET_CAPTCHA_URL, payload: {captchaURL}}
)

export const auth = () => {
    return async (dispatch: Dispatch) => {
        const data = await authAPI.getAuth()
        if (data.resultCode === 0) {
            const {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: Dispatch) => {
        const data = await authAPI.login(email, password, rememberMe, captcha)
        if (data.resultCode === 0) {
            dispatch<any>(auth())
        } else {
            if (data.resultCode === 10) {
                dispatch<any>(getCaptchaURL())
            }
            const msg = data.messages.length > 0 ? data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: msg}))
        }
    }
}
export const logout = () => {
    return async (dispatch: Dispatch) => {
        const data = await authAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(0, '', '', false))
        }
    }
}

export const getCaptchaURL = () => {
    return async (dispatch: Dispatch) => {
        const data = await securityAPI.getCaptchaURL()
        const captchaURL = data.url
        console.log(captchaURL)
        dispatch(setCaptchaURL(captchaURL))
    }
}