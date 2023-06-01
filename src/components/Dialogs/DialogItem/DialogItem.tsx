import style from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {DialogsType} from '../../../App';


export const DialogItem = (props: DialogsType) => {
    return (
        <div className={style.dialog}>
            <img src="http://simpleicon.com/wp-content/uploads/user1.png" alt="avatar"/>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}