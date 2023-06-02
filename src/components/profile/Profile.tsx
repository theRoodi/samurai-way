import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType, ProfilePageType} from '../../state/state';

type PropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    changeHandler: (newText: string) => void
}
export const Profile = (props:PropsType) => {
    return (
        <div >
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage} addPost={props.addPost} changeHandler={props.changeHandler}/>
        </div>
    )
}