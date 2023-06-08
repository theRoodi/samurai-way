import {ActionType, profileReducer } from './profileReducer';
import { dialogReducer} from './dialogReducer';
import {v1} from 'uuid';

type DialogsType = {
    id: string
    name: string
}
type MessagesType = {
    id: string
    message: string
}
export type PostType = {
    id: string
    message: string
    likes: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

export type RootStateType = {
    profilePage : ProfilePageType
    messagePage: DialogPageType
}


export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}
export const store: StoreType= {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hello', likes: 5},
                {id: v1(), message: 'How are you', likes: 7},
                {id: v1(), message: 'Hello world', likes: 23}
            ],
            newPostText: ''
        },
        messagePage: {
            dialogs: [
                {id: v1(), name: 'User one'},
                {id: v1(), name: 'User two'},
                {id: v1(), name: 'User three'},
                {id: v1(), name: 'User four'}
            ],
            messages: [
                {id: v1(), message: 'Hello'},
                {id: v1(), message: 'Hello world'},
                {id: v1(), message: 'Hello there'}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('re-rendered')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = dialogReducer(this._state.messagePage, action)
        this._callSubscriber(this._state)
    }

}



