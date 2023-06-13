import style from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {DialogsType} from '../../../state/dialogReducer';
import defaultAvatar from '../../../assets/images/defaultAvatar.png'


export const DialogItem = (props: DialogsType) => {
    return (
        <div className={style.dialog}>
            <img src={defaultAvatar} alt="avatar"/>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}