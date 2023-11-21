import React from 'react';
import {ProfileInfo, PropsType} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import style from './Profile.module.css'


export const Profile = (props: PropsType) => {
    return (
        <div>
            <section className={style.userInfo}>
                <ProfileInfo profile={props.profile}
                             status={props.status}
                             updateStatus={props.updateStatus}/>
            </section>
            <section className={style.userContent}>
                <MyPostsContainer/>
            </section>
        </div>
    )
}