import post from '../components/profile/MyPosts/Post/Post';


export type MessageType = {
    id: number
    message: string
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

export type StoreType = {
    _state: RootStateType
    _rerender: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action:any) => void


    // addPost: (post: string) => void
    // addMessage: (message: string) => void
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
            ]
        },
        profilePage: {
            posts: [
                {id: 1, message: 'post 1', likesCount: 10},
                {id: 2, message: 'post 2', likesCount: 20},
                {id: 3, message: 'post 3', likesCount: 30},
            ]
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
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 5,
                message: action.newPost,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._rerender()
        }else
            if (action.type === 'ADD-MESSAGE') {
                const newMessage: MessageType = {
                    id: 5,
                    message: action.message
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._rerender()
            }
        }
    // addPost(post: string){
    //     const newPost: PostType = {
    //         id: 5,
    //         message: post,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._rerender()
    // },
    // addMessage(message: string) {
    //     const newMessage: MessageType = {
    //         id: 5,
    //         message: message
    //     }
    //     this._state.dialogsPage.messages.push(newMessage)
    //     this._rerender()
    // }
}



