const initialState = {
    userId: 0,
    login: 'null',
    email: 'null',
    // isFetching: false
    isAuth: false
}

export type InitialStateType = typeof initialState

export type SetUserDataAT = {
    type: 'SET-USER-DATA'
    data: InitialStateType
}

type AllMessageType = SetUserDataAT


export const authReducer = (state: InitialStateType = initialState, action: AllMessageType): InitialStateType => {

    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}
export const setAuthUserData = (userId:number, login:string, email:string): SetUserDataAT => {
    debugger
    return {
        type: 'SET-USER-DATA',
        data: {userId, login, email, isAuth: false}
    }
}
