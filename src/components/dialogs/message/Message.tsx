import style from './../Dialogs.module.css'
import {MessageType} from '../../../redux/store';

const Messages = (props : MessageType) => {
    return(
        <div className={style.message}>{props.message}</div>
    )
}

export default  Messages