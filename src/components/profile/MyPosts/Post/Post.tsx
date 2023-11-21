import React from 'react';
import style from './Post.module.css'
import avatar from '../../../../assets/images/defaultAvatar.png'
import {Trash2} from 'lucide-react';

type PropsType = {
    message: string
    likes: number
}
export const Post = (props: PropsType) => {
    return (
        <div className={style.postItems}>
            <div className={style.postItem}>
                <div className={style.postItemTitle}>
                    <a className={style.postItemTitleLink} href="#">
                        <img className={style.postItemTitleImg} src={avatar} alt="avatar"/>
                    </a>
                    <div className={style.postItemTitleBox}>
                        <p className={style.postItemTitleName}>
                            <a href="#">Maksim Golovin</a>
                            posted an update
                        </p>
                        <p className={style.postItemTitleDate}>
                            6 months ago
                        </p>
                        <div className={style.postItemTitleOption}>
                            <div className={style.postItemTitleOptionBtn}>
                                <Trash2 size={17} color={'#000'} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}