import React from 'react';
import style from './ProfileInfo.module.css'
import {Preloader} from '../../common/preloader/Preloader';

type ProfileInfoType = {
    profile: any
}

const ProfileInfo = (props: ProfileInfoType) => {
    debugger
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={style.coverImg}>
                {/*<img src={props.profile.photos.small}/>*/}
                <div>cover will be here</div>
            </div>
            <div className={style.description}>
                <img src={props.profile.photos.large} alt="avatar"/>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.twitter}</div>
                <div>{props.profile.lookingForAJob}</div>
                <div>{props.profile.fullName}</div>
            </div>
        </div>
    )
}

export default ProfileInfo