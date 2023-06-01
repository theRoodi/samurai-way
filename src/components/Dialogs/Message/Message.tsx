import style from '../Dialogs.module.css';
import React from 'react';

type PropsMessageType = {
    message: string
}
export const Message = (props: PropsMessageType) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}