import {rerender} from '../render';

export type MessageType = {
    id:number
    message : string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const state:RootStateType = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Igor'},
            {id: 2, name: 'Max'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Dave'},
        ],
        messages: [
            {id: 1, message: 'Hey'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Fine'},
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'post 1', likesCount: 10},
            {id: 2, message: 'post 2', likesCount: 20},
            {id: 3, message: 'post 3', likesCount: 30},
        ]
    }

}

export const addPost = (post : string) => {
    const newPost:PostType = {
        id: 5,
        message: post,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerender()
}

export const addMessage = (message : string) => {
    const newMessage:MessageType = {
        id: 5,
        message: message
    }
    state.dialogsPage.messages.push(newMessage)
    rerender()
}

