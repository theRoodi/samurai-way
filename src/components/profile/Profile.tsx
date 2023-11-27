import React from 'react';
import {ProfileInfo, PropsType} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import style from './Profile.module.css'


export const Profile = (props: PropsType) => {
    return (
        <div>
            <section className={style.userInfo}>
                <ProfileInfo profile={props.profile}
                             isOwner={props.isOwner}
                             status={props.status}
                             updateStatus={props.updateStatus}
                             savePhoto={props.savePhoto}
                             saveProfile={props.saveProfile}/>
            </section>
            <section className={style.userContent}>
                <MyPostsContainer/>
            </section>
        </div>
    )
}