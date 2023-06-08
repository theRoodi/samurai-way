type PhotosType = {
    small: string | null
    large: string | null
}

export type UserType = {
    photos: PhotosType
    id: string
    followed: boolean
    name: string
    status: string
    uniqueUrlName: string | null
}

export type InitialStateType = {
    users: Array<UserType>
}

const initialState: InitialStateType = {
    users: []

}

type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>

type ActionTypes = FollowActionType | UnfollowActionType | SetUsersActionType

export const userReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case 'SET-USERS' : {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: string) => {
    return {type: 'FOLLOW', userId} as const
}
export const unfollowAC = (userId: string) => {
    return {type: 'UNFOLLOW', userId} as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {type: 'SET-USERS', users} as const
}
