import {PostType, ProfilePageType} from './state';

const ADD_POST = 'ADD-POST'

export const profileReducer = (state:ProfilePageType, action:any) => {

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