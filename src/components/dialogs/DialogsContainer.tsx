import style from './Dialogs.module.css'
import DialogItem from './dialog-item/DialogItem';
import Message from './message/Message';
import {addMessageActionCreator } from '../../redux/dialog-reducer';
import {ChangeEvent, useState} from 'react';
import {DialogType, MessageType} from '../../redux/store';
import Dialogs from './Dialogs';

type DialogPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    dispatch: (action: any) => void
}

const DialogsContainer = (props: DialogPropsType) => {

    let [message, setMessage] = useState('')

    const onChangeMessage = (text:string) => {
        setMessage(text)
    }

    const onAddMessage = () => {
        props.dispatch(addMessageActionCreator(message))
        setMessage('')
    }


    return (
        <Dialogs dialogs={props.dialogs} messages={props.messages} message={message} onChangeMessage={onChangeMessage} onAddMessage={onAddMessage} />
    )
}

export default DialogsContainer