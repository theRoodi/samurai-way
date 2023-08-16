import {PostType} from './state';
import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';

type ProfileContactType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

type ProfilePhotoType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: ProfilePhotoType
}

export type AddPostActionType = {
    type: 'ADD-POST',
    newPostText: string
}
export type UpdatePostTextActionType = {
    type: 'UPDATE-TEXT-POST'
    newText: string
}
export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: ProfileType
}
export type SetUserStatusActionType = {
    type: 'SET-USER-STATUS'
    status: string
}

export type ActionType =
    AddPostActionType
    | UpdatePostTextActionType
    | SetUserProfileActionType
    | SetUserStatusActionType

type InitialStateType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
}

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

const initialState = {
    posts: [
        {id: v1(), message: 'Hello', likes: 5},
        {id: v1(), message: 'How are you', likes: 7},
        {id: v1(), message: 'Hello world', likes: 23}
    ] as Array<PostType>,
    profile: null,
    status: ''
}
export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: v1(),
                message: action.newPostText,
                likes: 1
            }
            return {...state, posts: [newPost, ...state.posts]}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status};
        }
        default:
            return state
    }
}

export const addPost = (newPostText: string): AddPostActionType => {
    return {type: 'ADD-POST', newPostText}
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
    return {type: 'SET-USER-PROFILE', profile}
}
export const setUserStatus = (status: string): SetUserStatusActionType => {
    return {type: 'SET-USER-STATUS', status} as const
}

export const getProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })

    }
}
export const getStatus = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setUserStatus(data))
            })

    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })

    }
}