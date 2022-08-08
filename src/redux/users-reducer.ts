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

export type SetCurrentPageAT = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}

export type SetTotalCountAT = {
    type: 'SET-TOTAL-COUNT'
    totalCount: number
}
export type SwitchFetchingAT = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}
export type PhotoType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    photos: PhotoType
    followed: boolean
    name: string
    status: string
}


export type AllUsersType = FollowAT | UnfollowAT | SetUsersAT | SetCurrentPageAT | SetTotalCountAT | SwitchFetchingAT

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
                users:  action.users
            }
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-COUNT': {
            return {...state, totalUsersCount: action.totalCount}
        }
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const follow = (userID: number): FollowAT => {
    return {
        type: 'FOLLOW',
        userID
    }
}
export const unfollow = (userID: number): UnfollowAT => {
    return {
        type: 'UNFOLLOW',
        userID
    }
}

export const setUsers = (users: Array<UserType>): SetUsersAT => {
    return {
        type: 'SET-USERS',
        users
    }
}
export const setCurrentPage = (currentPage: number): SetCurrentPageAT => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    }
}
export const setTotalUsersCount = (totalCount: number): SetTotalCountAT => {
    return {
        type: 'SET-TOTAL-COUNT',
        totalCount
    }
}
export const toggleIsFetching = (isFetching: boolean): SwitchFetchingAT => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    }
}


