import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionTypes, ProfilePageType} from '../../state/state';

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}
export const Profile = (props:PropsType) => {
    return (
        <div >
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
        </div>
    )
}