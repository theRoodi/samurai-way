import style from './Dialogs.module.css'
import DialogItem from './dialog-item/DialogItem';
import Message from './message/Message';
import {DialogsPageType} from '../../redux/state';

const Dialogs = (props: DialogsPageType) => {

    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    const messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default  Dialogs