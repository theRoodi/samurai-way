import {ActionType, AddPostActionType, profileReducer, UpdatePostTextActionType} from './profileReducer';
import {AddMessageActionType, dialogReducer, UpdateMessageTextActionType} from './dialogReducer';

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
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
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Hello world'},
                {id: 3, message: 'Hello there'}
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



