import style from './Dialogs.module.css'
import DialogItem from './dialog-item/DialogItem';
import Message from './message/Message';
import {ChangeEvent} from 'react';
import {DialogsPropsType} from './DialogsContainer';
import {Redirect} from 'react-router-dom';


const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)


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
                <textarea value={props.dialogsPage.newMessageText} onChange={onChangeMessage}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>
    )
}

export default Dialogs