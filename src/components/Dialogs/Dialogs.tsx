import React from 'react';

import style from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../state/dialogReducer';
import {Field, reduxForm} from 'redux-form';
import {FormControl} from '../common/FormsControl/FormsControl';
import {maxLengthCreator, requiredFiled} from '../../utils/validator';

export type AuthPropsType = {
    userId: number,
    email: string,
    login: string,
    isAuth: boolean
}

type PropsType = {
    addMessage: (newMessageText: string) => void
    updateNewMessageText: (newText: string) => void
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    auth: AuthPropsType
}

type FromDataType = {
    newMessageText: string
}
export const Dialogs = (props: PropsType) => {
    const dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)

    const messageElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)
    const addMessage = (value: any) => {
        props.addMessage(value.newMessageText)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
            <DialogFormRedux onSubmit={addMessage}/>
        </div>
    )
}
const maxLength = maxLengthCreator(50)
// export const DialogForm: React.FC<InjectedFormProps<FromDataType>> =
export const DialogForm = (props: any) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={FormControl}
                           child="textarea"
                           name="newMessageText"
                           placeholder="Enter message"
                           validate={[requiredFiled, maxLength]}/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

const DialogFormRedux = reduxForm({form: 'dialogForm'})(DialogForm)