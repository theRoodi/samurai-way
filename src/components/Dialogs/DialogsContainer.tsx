import React from 'react';
import { StoreType} from '../../state/state';
import {addMessageAC, updateNewMessageTextAC} from '../../state/dialogReducer';
import {Dialogs} from './Dialogs';

type PropsType = {
    store: StoreType
}
export const DialogsContainer = (props: PropsType) => {
    const state = props.store.getState().messagePage

    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    const onChangeHandler = (newText: string) => {
        const action = updateNewMessageTextAC(newText)
        props.store.dispatch(action)
    }

    return (
        <Dialogs dialogs={state.dialogs} messages={state.messages} newMessageText={state.newMessageText} addMessage={addMessage} updateNewMessageText={onChangeHandler}/>
    )
}