import {PostType} from './state';
import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';
import {AppStateType} from '../redux/redux-store';
import {stopSubmit} from 'redux-form';

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

export type ProfilePhotoType = {
    small: string
    large: string
}

export type ProfileType = {
    photos: ProfilePhotoType;
    aboutMe?: string | undefined;
    contacts?: ProfileContactType | undefined;
    lookingForAJob?: boolean | undefined;
    lookingForAJobDescription?: string | undefined;
    fullName?: string | undefined; userId?: number | undefined;
}

export type AddPostActionType = {
    type: 'profile/ADD-POST',
    newPostText: string
}
export type DeletePostActionType = {
    type: 'profile/DELETE-POST',
    postId: string
}
export type UpdatePostTextActionType = {
    type: 'profile/UPDATE-TEXT-POST'
    newText: string
}
export type SetUserProfileActionType = {
    type: 'profile/SET-USER-PROFILE'
    profile: ProfileType
}
export type SetUserStatusActionType = {
    type: 'profile/SET-USER-STATUS'
    status: string
}
export type SetUserPhotoActionType = {
    type: 'profile/SET-USER-PHOTO'
    photos: ProfilePhotoType
}
export type UpdateUserActionType = {
    type: 'profile/UPDATE-USER'
    profile: ProfileType
}

export type ActionType =
    AddPostActionType
    | DeletePostActionType
    | UpdatePostTextActionType
    | SetUserProfileActionType
    | SetUserStatusActionType
    | SetUserPhotoActionType
    | UpdateUserActionType

type InitialStateType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
}

const ADD_POST = 'profile/ADD-POST'
const DELETE_POST = 'profile/DELETE-POST'
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_USER_STATUS = 'profile/SET-USER-STATUS'
const SET_USER_PHOTO = 'profile/SET-USER-PHOTO'
const UPDATE_USER = 'profile/UPDATE-USER'

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
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status};
        }
        case SET_USER_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.photos}};
        }
        case UPDATE_USER: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPost = (newPostText: string): AddPostActionType => {
    return {type: 'profile/ADD-POST', newPostText}
}
export const deletePost = (postId: string): DeletePostActionType => {
    return {type: 'profile/DELETE-POST', postId}
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
    return {type: 'profile/SET-USER-PROFILE', profile}
}
export const setUserStatus = (status: string): SetUserStatusActionType => {
    return {type: 'profile/SET-USER-STATUS', status} as const
}
export const setUserPhoto = (photos: ProfilePhotoType): SetUserPhotoActionType => {
    return {type: SET_USER_PHOTO, photos}
}

export const getProfile = (userId: number) => {
    return async (dispatch: Dispatch) => {
        const data = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(data))
    }

}
export const getStatus = (userId: number) => {
    return async (dispatch: Dispatch) => {
        const data = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(data))

    }
}
export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch) => {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }

    }
}
export const savePhoto = (photo: string) => {
    return async (dispatch: Dispatch) => {
        const data = await profileAPI.savePhoto(photo)
        if (data.resultCode === 0) {
            dispatch(setUserPhoto(data.data.photos))
        }

    }
}
export const updateProfile = (profile: ProfileType) => {
    return async (dispatch: Dispatch, getState: any) => {
        const userId = getState().auth.userId
        const data = await profileAPI.updateProfile(profile)
        if (data.data.resultCode === 0) {
            // @ts-ignore
            dispatch(getProfile(userId))
        } else {
            dispatch(stopSubmit('edit-profile', {_error: data.data.messages[0]}))
            return Promise.reject(data.data.messages[0])
        }

    }
}