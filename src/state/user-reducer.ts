import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';

type PhotosType = {
    small: string | null
    large: string | null
}

export type UserType = {
    photos: PhotosType
    id: number
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
    isFetching: boolean
    isFollowing: number[]
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: []

}

type FollowActionType = ReturnType<typeof followSuccess>
type UnfollowActionType = ReturnType<typeof unfollowSuccess>
type SetUsersActionType = ReturnType<typeof setUsers>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
type SetTotalCountActionType = ReturnType<typeof setTotalCount>
type SetToggleActionType = ReturnType<typeof setToggle>
type SetFollowingActionType = ReturnType<typeof setFollowing>

type ActionTypes =
    FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalCountActionType
    | SetToggleActionType
    | SetFollowingActionType

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
            return {...state, users: action.users}
        }
        case 'SET-CURRENT-PAGE' : {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-COUNT' : {
            return {...state, totalUsersCount: action.totalCount}
        }
        case 'SET-TOGGLE' : {
            return {...state, isFetching: action.isFetching}
        }
        case 'SET-FOLLOWING' : {
            return {
                ...state, isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.id]
                    : state.isFollowing.filter(id => id !== action.id)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId: number) => {
    return {type: 'FOLLOW', userId} as const
}
export const unfollowSuccess = (userId: number) => {
    return {type: 'UNFOLLOW', userId} as const
}
export const setUsers = (users: Array<UserType>) => {
    return {type: 'SET-USERS', users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const setTotalCount = (totalCount: number) => {
    return {type: 'SET-TOTAL-COUNT', totalCount} as const
}
export const setToggle = (isFetching: boolean) => {
    return {type: 'SET-TOGGLE', isFetching} as const
}
export const setFollowing = (isFollowing: boolean, id: number) => {
    return {type: 'SET-FOLLOWING', isFollowing, id} as const
}


export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggle(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setToggle(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(data.totalCount))
            })
    }
}
export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFollowing(true, userId))
        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(setFollowing(false, userId))
            })
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFollowing(true, userId))
        usersAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(setFollowing(false, userId))
            })
    }
}