import style from './../Dialogs.module.css'
import {MessageType} from '../../../redux/dialog-reducer';

const Messages = (props: MessageType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

export default Messages