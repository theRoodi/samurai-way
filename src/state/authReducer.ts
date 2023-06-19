import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

export type InitialStateType = typeof initialState

export type UserActionType = {
    userId: string
    email: string
    login: string
    isAuth: boolean
}

export type DataActionType = {
    type: 'SET-USER-DATA'
    data: UserActionType
}
export type ActionType = DataActionType


const SET_USER_DATA = 'SET-USER-DATA'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: string, email: string, login: string) => (
    {type: SET_USER_DATA, data: {userId, email, login}} as const
)

export const auth = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}