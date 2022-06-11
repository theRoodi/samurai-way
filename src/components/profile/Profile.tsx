import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props: any) => {
    const cover = 'https://images.unsplash.com/photo-1487029752779-a0c17b1f5ec9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    const desc = "ava + desc"
    return (
        <div className={style.content}>
            <ProfileInfo cover={cover} desc={desc} />
            <MyPosts/>
        </div>
    )
}

export default Profile