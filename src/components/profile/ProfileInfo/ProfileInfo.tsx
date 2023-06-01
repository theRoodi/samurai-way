import React from 'react';
import style from './ProfileInfo.module.css'
export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg"
                     alt="cover"/>
            </div>
            <div className={style.descriptionBlock}>ava + desc</div>
        </div>
    )
}