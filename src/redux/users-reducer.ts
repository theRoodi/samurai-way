export type FollowAT = {
    type: 'FOLLOW'
    userID: number
}

export type UnfollowAT = {
    type: 'UNFOLLOW'
    userID: number
}

export type SetUsersAT = {
    type: 'SET-USERS'
    users: Array<UserType>
}

export type LocationType = {
    country: string
    city: string
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type AllUsersType = FollowAT | UnfollowAT | SetUsersAT

const initialState = {
    users: []
}
export type InitialStateType = {
    users: Array<UserType>
}

export const usersReducer = (state: InitialStateType = initialState, action: AllUsersType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
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
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case 'SET-USERS': {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}

export const followAC = (userID: number): FollowAT => {
    return {
        type: 'FOLLOW',
        userID
    }
}
export const unfollowAC = (userID: number): UnfollowAT => {
    return {
        type: 'UNFOLLOW',
        userID
    }
}

export const setUsersAC = (users: Array<UserType>): SetUsersAT => {
    return {
        type: 'SET-USERS',
        users
    }
}

