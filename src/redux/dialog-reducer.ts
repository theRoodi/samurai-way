
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type AddMessageAT = {
    type: 'ADD-MESSAGE'
}
export type UpdateMessageAT = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    message: string
}


type AllActionsType = AddMessageAT | UpdateMessageAT

const initialState = {
    dialogs: [
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Dave'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hey'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Fine'},
    ] as Array<MessageType>,
    newMessageText: ''
}
export type InitialStateType = typeof initialState

export const dialogReducer = (state: InitialStateType = initialState, action: AllActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: 5,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            return {...state}
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state, newMessageText: action.message
            }
        default:
            return state
    }
}
export const addMessageActionCreator = (): AddMessageAT => {
    return {
        type: 'ADD-MESSAGE'
    }
}
export const UpdateMessageActionCreator = (message: string): UpdateMessageAT => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        message: message
    }
}