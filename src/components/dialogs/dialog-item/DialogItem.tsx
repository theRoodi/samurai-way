import style from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogType} from '../../../redux/store';


const DialogItem = (props : DialogType) => {
    const path = '/dialogs/' + props.id
    return(
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default  DialogItem