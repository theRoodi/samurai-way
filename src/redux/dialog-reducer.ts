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
    newMessageText: string
}

type AllMessageType = AddMessageAT | UpdateMessageAT

export type InitialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
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
    ],
    newMessageText: ''
}

export const dialogReducer = (state: InitialStateType = initialState, action: AllMessageType): InitialStateType => {

    switch (action.type) {
        case 'ADD-MESSAGE': {
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {
                    id: 5,
                    message: state.newMessageText
                }]
            }
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        }
        default:
            return state
    }
}
export const addMessageAC = (): AddMessageAT => {
    return {
        type: 'ADD-MESSAGE'
    }
}

export const updateMessageAC = (message: string): UpdateMessageAT => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessageText: message
    }
}