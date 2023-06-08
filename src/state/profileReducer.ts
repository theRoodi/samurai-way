import {PostType} from './state';
import {v1} from 'uuid';


export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdatePostTextActionType = {
    type: 'UPDATE-TEXT-POST'
    newText: string
}

export type ActionType = AddPostActionType | UpdatePostTextActionType
type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
}

const ADD_POST = 'ADD-POST'
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST'

const initialState = {
    posts: [
        {id: v1(), message: 'Hello', likes: 5},
        {id: v1(), message: 'How are you', likes: 7},
        {id: v1(), message: 'Hello world', likes: 23}
    ] as Array<PostType>,
    newPostText: ''
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
        default:
            return state
    }
}

export const addPostAC = (): AddPostActionType => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostTextAC = (text: string): UpdatePostTextActionType => {
    return {type: 'UPDATE-TEXT-POST', newText: text}
}