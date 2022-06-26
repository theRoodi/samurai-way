import style from './Dialogs.module.css'
import DialogItem from './dialog-item/DialogItem';
import Message from './message/Message';
import { DialogType, MessageType} from '../../redux/state';
import {ChangeEvent, useState} from 'react';

type DialogPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addMessage: (message: string) => void
}
    
const Dialogs = (props: DialogPropsType) => {

    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    const messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)

    let [message, setMessage] = useState('')

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const addMessage = () => {
        props.addMessage(message)
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

export default  Dialogs