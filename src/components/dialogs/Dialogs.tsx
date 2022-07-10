import style from './Dialogs.module.css'
import DialogItem from './dialog-item/DialogItem';
import Message from './message/Message';
import {addMessageActionCreator } from '../../redux/dialog-reducer';
import {ChangeEvent, useState} from 'react';
import {DialogType, MessageType} from '../../redux/state';

type DialogPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    dispatch: (action: any) => void
}

const Dialogs = (props: DialogPropsType) => {

    const dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    let [message, setMessage] = useState('')

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const addMessage = () => {
        props.dispatch(addMessageActionCreator(message))
        setMessage('')
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>

            <div>
                <textarea value={message} onChange={onChangeMessage}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>
    )
}

export default Dialogs