import {PostType} from './state';
import {v1} from 'uuid';

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
    type: 'ADD-POST'
}
export type UpdatePostTextActionType = {
    type: 'UPDATE-TEXT-POST'
    newText: string
}
export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: ProfileType
}

export type ActionType = AddPostActionType | UpdatePostTextActionType | SetUserProfileActionType

type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}

const ADD_POST = 'ADD-POST'
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

const initialState = {
    posts: [
        {id: v1(), message: 'Hello', likes: 5},
        {id: v1(), message: 'How are you', likes: 7},
        {id: v1(), message: 'Hello world', likes: 23}
    ] as Array<PostType>,
    newPostText: '',
    profile: null
}
export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likes: 1
            }
            return {...state, newPostText: '', posts: [newPost, ...state.posts]}
        }
        case UPDATE_TEXT_POST: {
            return {...state, newPostText: action.newText};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        default:
            return state
    }
}

export const addPost = (): AddPostActionType => {
    return {type: 'ADD-POST'}
}
export const updateNewPostText = (text: string): UpdatePostTextActionType => {
    return {type: 'UPDATE-TEXT-POST', newText: text}
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
    return {type: 'SET-USER-PROFILE', profile}
}