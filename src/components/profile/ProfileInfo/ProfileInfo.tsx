import React from 'react';
import style from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../state/profileReducer';
import avatar from '../../../assets/images/defaultAvatar.png';
import {ProfileStatus} from '../ProfileStatus/ProfileStatus';

export type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}
export const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg"
                     alt="cover"/>
            </div>
            <div className={style.descriptionBlock}>
                <div><img src={props.profile.photos.small !== null ? props.profile.photos.small : avatar} alt=""/></div>
                <div><b>Full Name:</b> {props.profile.fullName}</div>
                <div><ProfileStatus status={props.status} updateStatus={props.updateStatus}/></div>
                <div><b>Site:</b> {props.profile.contacts.website}</div>
                <div><b>Github:</b> {props.profile.contacts.github}</div>
            </div>
        </div>
    )
}