import style from './Dialogs.module.css'
import DialogItem from './dialog-item/DialogItem';
import Message from './message/Message';
import {ChangeEvent} from 'react';
import {DialogType, MessageType} from '../../redux/store';

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    message: string
    onChangeMessage: (text: string) => void
    onAddMessage: () => void
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)


    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessage(e.currentTarget.value)
    }

    const addMessage = () => {
        props.onAddMessage()
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
                <textarea value={props.message} onChange={onChangeMessage}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>
    )
}

export default Dialogs