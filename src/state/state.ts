let rerender = (state:RootStateType) => {
    console.log('re-rendered')
}

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likes: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: DialogPageType

}

export type AddPostType = {
    addPost: (post: string) => void
}

export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello', likes: 5},
            {id: 2, message: 'How are you', likes: 7},
            {id: 3, message: 'Hello world', likes: 23}
        ],
        newPostText: ''
    },
    messagePage: {
        dialogs: [
            {id: 1, name: 'User one'},
            {id: 2, name: 'User two'},
            {id: 3, name: 'User three'},
            {id: 4, name: 'User four'}
        ],
        messages: [
            {id: 1, name: 'Hello'},
            {id: 2, name: 'Hello world'},
            {id: 3, name: 'Hello there'}
        ],
    }
}
export const addPost = () => {
    const newPost: PostType = {
        id: 4,
        message: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerender(state)

}

export const changeHandler = (newText: string) => {
    state.profilePage.newPostText = newText
    rerender(state)
}

export const subscriber = (observer: any) => {
    rerender = observer
}