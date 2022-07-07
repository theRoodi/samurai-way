import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from '../../redux/state';

export type ProfilePagesType = {
    posts: PostType[]
    addPost: (post: string) => void
}

const Profile = (props: ProfilePagesType) => {
    const cover = 'https://images.unsplash.com/photo-1487029752779-a0c17b1f5ec9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    const desc = "ava + desc"
    return (
        <div className={style.content}>
            <ProfileInfo cover={cover} desc={desc} />
            <MyPosts posts={props.posts} addPost={props.addPost} />
        </div>
    )
}

export default Profile