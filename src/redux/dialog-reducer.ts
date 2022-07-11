import {DialogsPageType, MessageType, RootStateType} from './store';


const ADD_MESSAGE = 'ADD-MESSAGE'

const initialState = {
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
}

export const dialogReducer = (state:DialogsPageType = initialState, action:any) => {
    if (action.type === ADD_MESSAGE) {
        const newMessage: MessageType = {
            id: 5,
            message: action.message
        }
        state.messages.push(newMessage)
    }
    return state
}
export const addMessageActionCreator = (message: string) => {
    return {
        type: ADD_MESSAGE,
        message: message
    }
}