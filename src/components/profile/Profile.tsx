import React from 'react';
import style from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg"
                     alt="cover"/>
            </div>
            <div>ava + desc</div>
            <MyPosts/>
        </div>
    )
}