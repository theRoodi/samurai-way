import style from './Dialogs.module.css'
import DialogItem from './dialog-item/DialogItem';
import Message from './message/Message';
import {DialogsPageType} from '../../redux/state';
import {ChangeEvent, useState} from 'react';

const Dialogs = (props: DialogsPageType) => {

    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    const messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)

    let [message, setMessage] = useState('')

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const addMessage = () => {
        setMessage(message)
        alert(message)
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