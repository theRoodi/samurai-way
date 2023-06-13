import React, {ChangeEvent} from 'react';

import style from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../state/dialogReducer';

type PropsType = {
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export const Dialogs = (props: PropsType) => {
    const dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)

    const messageElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)
    const addMessage = () => {
        props.addMessage()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
                <div>
                    <div>
                        <textarea placeholder={'Enter message'} value={props.newMessageText}
                                  onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}