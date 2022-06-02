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
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogItem name={'Igor'} id={1} />
                <DialogItem name={'Dima'} id={2} />
                <DialogItem name={'Victor'} id={3} />
                <DialogItem name={'Ignat'} id={4} />
            </div>
            <div className={style.messages}>
                <Messages message={'Hey'} />
                <Messages message={'How are you?'} />
                <Messages message={'Fine!'} />
            </div>
        </div>
    )
}

export default  Dialogs