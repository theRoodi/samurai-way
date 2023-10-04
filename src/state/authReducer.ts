import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

export type InitialStateType = typeof initialState

export type UserActionType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
}

export type DataActionType = {
    type: 'SET-USER-DATA'
    payload: UserActionType
}
export type ActionType = DataActionType


const SET_USER_DATA = 'SET-USER-DATA'

const initialState = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false
}
export const authReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
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

export const auth = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login,true))
                }
            })
    }
}
export const login = (email:string, password:string, rememberMe:boolean) => {
    return (dispatch: Dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch<any>(auth())
                } else {
                    const msg = data.messages.length > 0 ? data.messages[0] : 'Some error'
                    const action = stopSubmit('login', {_error: msg})
                    dispatch(action)
                }
            })
    }
}
export const logout = ( ) => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(0,'','',false))
                }
            })
    }
}