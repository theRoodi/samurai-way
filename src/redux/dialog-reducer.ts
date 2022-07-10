import {DialogsPageType, MessageType, RootStateType} from './state';


const ADD_MESSAGE = 'ADD-MESSAGE'

export const dialogReducer = (state:DialogsPageType, action:any) => {
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