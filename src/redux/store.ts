import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';


type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    _rerender: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: any) => void

}

export const store: StoreType = {
    _state: {
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
            ],
            newMessageText: ''
        },
        profilePage: {
            posts: [
                {id: 1, message: 'post 1', likesCount: 10},
                {id: 2, message: 'post 2', likesCount: 20},
                {id: 3, message: 'post 3', likesCount: 30},
            ],
            newPostText: ''
        }
    },
    _rerender() {
        console.log('state changed')
    },

    subscribe(callback) {
        this._rerender = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._rerender()
    }
}





