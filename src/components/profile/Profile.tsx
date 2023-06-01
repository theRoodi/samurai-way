import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType} from '../../App';

type PropsType = {
    posts: Array<PostType>
}
export const Profile = (props:PropsType) => {
    return (
        <div >
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    )
}