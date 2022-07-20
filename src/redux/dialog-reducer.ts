import {DialogsPageType, DialogType, MessageType} from './store';


const ADD_MESSAGE = 'ADD-MESSAGE'

export type AddMessageAT = {
    type: typeof ADD_MESSAGE
    message: string
}

export type InitialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
const initialState: InitialStateType = {
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

export const dialogReducer = (state: DialogsPageType = initialState, action: AddMessageAT): DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: 5,
                message: action.message
            }
            state.messages.push(newMessage)
            return {...state}
        default:
            return state
    }
}
export const addMessageActionCreator = (message: string): AddMessageAT => {
    return {
        type: ADD_MESSAGE,
        message: message
    }
}