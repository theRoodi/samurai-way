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
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1

}

type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type SetTotalCountActionType = ReturnType<typeof setTotalCountAC>

type ActionTypes = FollowActionType | UnfollowActionType | SetUsersActionType | SetCurrentPageActionType | SetTotalCountActionType

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
            // return {...state, ...action.users}
            return {...state, users: action.users }
        }
        case 'SET-CURRENT-PAGE' : {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-COUNT' : {
            return {...state, totalUsersCount: action.totalCount}
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
export const setCurrentPageAC = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const setTotalCountAC = (totalCount: number) => {
    return {type: 'SET-TOTAL-COUNT', totalCount} as const
}
