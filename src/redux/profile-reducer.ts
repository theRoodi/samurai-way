import {Dispatch} from 'redux';
import {userAPI} from '../api/api';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ContactsProfileType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type PhotoProfileType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsProfileType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotoProfileType
}

export type AddPostAT = {
    type: 'ADD-POST'
}
export type UpdatePostAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}

export type SetUserProfileAT = {
    type: 'SET-USER-PROFILE'
    profile: any
}


export type AllProfileType = AddPostAT | UpdatePostAT | SetUserProfileAT

const initialState = {
    posts: [
        {id: 1, message: 'post 1', likesCount: 10},
        {id: 2, message: 'post 2', likesCount: 20},
        {id: 3, message: 'post 3', likesCount: 30},
    ],
    newPostText: '',
    profile: null
}
export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: AllProfileType): InitialStateType => {

    switch (action.type) {
        case 'ADD-POST': {
            return {
                ...state,
                newPostText: '',
                posts: [{
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                }, ...state.posts]
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}
export const addPostAC = (): AddPostAT => {
    return {
        type: 'ADD-POST'
    }
}

export const updatePostAC = (text: string): UpdatePostAT => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: text
    }
}
export const setUserProfile = (profile: ProfileType): SetUserProfileAT => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    }
}

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}