
type LocationType = {
    city: string
    country: string
}

export type UserType = {
    photoUrl: string
    id: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

type StateType = {
    users: Array<UserType>
}

const initialState = {
    users: []
}

export const userReducer = (state: StateType = initialState, action: any) => {
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
