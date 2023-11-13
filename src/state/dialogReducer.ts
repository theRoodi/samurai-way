import {AddPostActionType, SetUserProfileActionType, UpdatePostTextActionType} from './profileReducer';
import {v1} from 'uuid';

export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}

type ActionType =
    AddMessageActionType
    | AddPostActionType
    | UpdatePostTextActionType
    | SetUserProfileActionType

export type AddMessageActionType = ReturnType<typeof addMessage>

export type InitialStateType = typeof initialState

const ADD_MESSAGE = 'dialog/ADD-MESSAGE'

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
    ] as Array<MessagesType>
}
export const dialogReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage: MessagesType = {
                id: v1(),
                message: action.newMessageText
            }
            return {...state, messages: [...state.messages, newMessage]}
        }
        default:
            return state
    }
}

export const addMessage = (newMessageText: string) => {
    return {
        type: ADD_MESSAGE,
        newMessageText
    } as const
}