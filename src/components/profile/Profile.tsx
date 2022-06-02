import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props: any) => {
    const cover = "https://socialsizes.io/static/facebook-cover-photo-size-eb6495646be79eea62423b216ac0b36b.jpg"
    const desc = "ava + desc"
    return (
        <div className={style.content}>
            <ProfileInfo cover={cover} desc={desc} />
            <MyPosts/>
        </div>
    )
}

export default Profile