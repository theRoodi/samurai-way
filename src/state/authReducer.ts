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
export const authReducer = (state: InitialStateType = initialState, action: any) => {
   switch (action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: string, email: string, login: string)=> (
    {type: SET_USER_DATA , data:{userId, email, login} } as const
)