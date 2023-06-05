
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

// export type RootStateType = {
//     store : StoreType
//     dispatch: (action: any) => void
// }
export type RootStateType = {
    profilePage : ProfilePageType
    messagePage: DialogPageType
}

export type AddPostType = {
    addPost: (post: string) => void
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscriber: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = AddPostActionType | UpdatePostTextActionType | AddMessageActionType | UpdateMessageTextActionType

type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdatePostTextActionType = {
    type: 'UPDATE-TEXT-POST'
    newText: string
}
type AddMessageActionType = ReturnType<typeof addMessageAC>

type UpdateMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>



const ADD_POST = 'ADD-POST'
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE'
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
    _callSubscriber(state: RootStateType) {
        console.log('re-rendered')
    },

    subscriber(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        switch (action.type){
            case ADD_POST:
                const newPost: PostType = {
                    id: 4,
                    message: this._state.profilePage.newPostText,
                    likes: 0
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state)
                return
            case UPDATE_TEXT_POST:
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber(this._state)
                return;
            case ADD_MESSAGE:
                const newMessage: MessagesType = {
                    id: 4,
                    message: this._state.messagePage.newMessageText
                }
                this._state.messagePage.messages.push(newMessage)
                this._state.messagePage.newMessageText = ''
                this._callSubscriber(this._state)
                return;
            case UPDATE_TEXT_MESSAGE:
                this._state.messagePage.newMessageText = action.newText
                this._callSubscriber(this._state)
                return;
        }
    }

}

export const addPostAC = (): AddPostActionType => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextAC = (text: string): UpdatePostTextActionType => {
    return {type: UPDATE_TEXT_POST, newText: text}
}

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const
}

export const updateNewMessageTextAC = (text: string) => {
    return {type: UPDATE_TEXT_MESSAGE, newText: text} as const
}