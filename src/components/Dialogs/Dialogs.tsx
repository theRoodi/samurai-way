import React from 'react';

import style from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../state/state';

type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export const Dialogs = (props: PropsType) => {
    const dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    const messageElements = props.messages.map(m => <Message message={m.name}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
                <div>
                    <div><textarea></textarea></div>
                    <div>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}