import style from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogType = {
    name: string
    id: number
}

type MessageType = {
    message : string
}


const DialogItem = (props : DialogType) => {
    const path = '/dialogs/' + props.id
    return(
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Messages = (props : MessageType) => {
    return(
        <div className={style.message}>{props.message}</div>
    )
}


const Dialogs = (props: any) => {

    const dialogsItem:Array<DialogType> = [
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Dave'},
    ]

    const messagesItem:Array<MessageType> = [
        {message: 'Hey'},
        {message: 'How are you?'},
        {message: 'Fine'},
    ]


    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogItem name={dialogsItem[0].name} id={dialogsItem[0].id} />
                <DialogItem name={dialogsItem[1].name} id={dialogsItem[1].id} />
                <DialogItem name={dialogsItem[2].name} id={dialogsItem[2].id} />
                <DialogItem name={dialogsItem[3].name} id={dialogsItem[3].id} />
            </div>
            <div className={style.messages}>
                <Messages message={messagesItem[0].message} />
                <Messages message={messagesItem[1].message} />
                <Messages message={messagesItem[2].message} />
            </div>
        </div>
    )
}

export default  Dialogs