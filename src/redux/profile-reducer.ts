export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type AddPostAT = {
    type: 'ADD-POST'
}
export type UpdatePostAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}

export type AllProfileType = AddPostAT | UpdatePostAT

const initialState = {
    posts: [
        {id: 1, message: 'post 1', likesCount: 10},
        {id: 2, message: 'post 2', likesCount: 20},
        {id: 3, message: 'post 3', likesCount: 30},
    ],
    newPostText: ''
}
export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: AllProfileType): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.newPostText = ''
            state.posts.push(newPost)

            return {...state}
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newPostText
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

export const updatePostAC = (text:string): UpdatePostAT => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: text
    }
}