import {PostType, ProfilePageType} from './store';

const ADD_POST = 'ADD-POST'

const initialState = {
    posts: [
        {id: 1, message: 'post 1', likesCount: 10},
        {id: 2, message: 'post 2', likesCount: 20},
        {id: 3, message: 'post 3', likesCount: 30},
    ]
}

export const profileReducer = (state:ProfilePageType = initialState, action:any) => {

    if (action.type === ADD_POST) {
        const newPost: PostType = {
            id: 5,
            message: action.newPost,
            likesCount: 0
        }
        state.posts.push(newPost)
    }

    return state
}
export const addPostActionCreator = (newPost: string) => {
    return {
        type: ADD_POST,
        newPost: newPost
    }
}