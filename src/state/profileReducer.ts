import {PostType} from './state';


export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdatePostTextActionType = {
    type: 'UPDATE-TEXT-POST'
    newText: string
}

export type ActionType = AddPostActionType | UpdatePostTextActionType
type PropsStateType = {
    posts: Array<PostType>
    newPostText: string
}

const ADD_POST = 'ADD-POST'
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST'

const initialState = {
    posts: [
        {id: 1, message: 'Hello', likes: 5},
        {id: 2, message: 'How are you', likes: 7},
        {id: 3, message: 'Hello world', likes: 23}
    ],
    newPostText: ''
}
export const profileReducer = (state: PropsStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: 4,
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