import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import { StoreType} from '../../state/state';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type PropsType = {
    store: StoreType
}
export const Profile = (props:PropsType) => {
    return (
        <div >
            <ProfileInfo />
            <MyPostsContainer store={props.store}/>
        </div>
    )
}