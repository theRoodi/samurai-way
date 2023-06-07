import {MessagesType} from './state';


export type AddMessageActionType = ReturnType<typeof addMessageAC>

export type UpdateMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE'

const initialState = {
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
export const dialogReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage: MessagesType = {
                id: 4,
                message: state.newMessageText
            }
            return {...state, newMessageText: '', messages: [newMessage, ...state.messages]}
        }
        case UPDATE_TEXT_MESSAGE: {
            return  {...state, newMessageText: action.newText}
        }
        default:
            return state
    }
}

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}

export const updateNewMessageTextAC = (text: string) => {
    return {type: 'UPDATE-TEXT-MESSAGE', newText: text} as const
}