import React from 'react';
import style from './Post.module.css'

type PropsType = {
    message: string
    likes: number
}
export const Post = (props: PropsType) => {
    return (

        <div className={style.item}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                alt="avatar"/>
            <span>{props.message}</span>
            <div>{props.likes} likes</div>
        </div>
    )
}