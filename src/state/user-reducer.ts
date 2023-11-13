import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';
import {updateObject} from '../utils/objectHelper';

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

const FOLLOW = 'user/FOLLOW'
const UNFOLLOW = 'user/UNFOLLOW'
const SET_USERS = 'user/SET-USERS'
const SET_CURRENT_PAGE = 'user/SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'user/SET-TOTAL-COUNT'
const SET_TOGGLE = 'user/SET-TOGGLE'
const SET_FOLLOWING = 'user/SET-FOLLOWING'

export const userReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObject(state.users, action.userId, {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObject(state.users, action.userId, {followed: false})
            }
        }
        case SET_USERS : {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT : {
            return {...state, totalUsersCount: action.totalCount}
        }
        case SET_TOGGLE : {
            return {...state, isFetching: action.isFetching}
        }
        case SET_FOLLOWING : {
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
    return {type: FOLLOW, userId} as const
}
export const unfollowSuccess = (userId: number) => {
    return {type: UNFOLLOW, userId} as const
}
export const setUsers = (users: Array<UserType>) => {
    return {type: SET_USERS, users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
}
export const setTotalCount = (totalCount: number) => {
    return {type: SET_TOTAL_COUNT, totalCount} as const
}
export const setToggle = (isFetching: boolean) => {
    return {type: SET_TOGGLE, isFetching} as const
}
export const setFollowing = (isFollowing: boolean, id: number) => {
    return {type: SET_FOLLOWING, isFollowing, id} as const
}

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: (userId: number) => any, actionCreator: (userId: number) => ActionTypes) => {
    dispatch(setFollowing(true, userId))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setFollowing(false, userId))
}
export const follow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        const apiMethod = usersAPI.follow.bind(userId)
        const actionCreator = followSuccess
        await followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    }
}
export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        const apiMethod = usersAPI.unfollow.bind(userId)
        const actionCreator = unfollowSuccess
        await followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    }
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {


        dispatch(setToggle(true))
        dispatch(setCurrentPage(currentPage))
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setToggle(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
    }
}