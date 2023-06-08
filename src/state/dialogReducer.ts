import {AddPostActionType, UpdatePostTextActionType} from './profileReducer';
import {v1} from 'uuid';

export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}

type ActionType = AddMessageActionType | UpdateMessageTextActionType | AddPostActionType | UpdatePostTextActionType

export type AddMessageActionType = ReturnType<typeof addMessageAC>

export type UpdateMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>

export type InitialStateType = typeof initialState

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE'

const initialState = {
    dialogs: [
        {id: v1(), name: 'User one'},
        {id: v1(), name: 'User two'},
        {id: v1(), name: 'User three'},
        {id: v1(), name: 'User four'}
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Hello world'},
        {id: v1(), message: 'Hello there'}
    ] as Array<MessagesType>,
    newMessageText: ''
}
export const dialogReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType=> {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage: MessagesType = {
                id: v1(),
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