import React from 'react';
import style from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../state/profileReducer';
import avatar from '../../../assets/images/defaultAvatar.png';
import {ProfileStatusHooks} from '../ProfileStatus/ProfileStatusHooks';
import {Github, Globe, Heart, Mail, MailPlus, Send, Twitter} from 'lucide-react';
import {useParams} from 'react-router-dom';

export type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}
export const ProfileInfo = (props: PropsType) => {

    // @ts-ignore
    const {userId} = useParams()

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={style.contentContainer}>
            <div className={style.userBlock}>
                <div className={style.avatar}>
                    <img className={style.img}
                         src={props.profile.photos.small !== null ? props.profile.photos.small : avatar} alt=""/>
                </div>
                <div className={style.descriptionBlock}>
                    <p className={style.userLookingJob}>
                        {props.profile.lookingForAJobDescription}

                    </p>
                    <p className={style.userName}>{props.profile.fullName}</p>
                    <p className={style.userStatus}>
                        <ProfileStatusHooks status={props.status}
                                            updateStatus={props.updateStatus}/>
                    </p>
                    <ul className={style.userList}>
                        <li className={style.userListItem}>
                            <p className={style.userText}>Online</p>
                        </li>
                        <li className={style.userListItem}>
                            <p className={style.userText}>Joined May 2019</p>
                        </li>
                    </ul>
                    <div className={style.userSection}>
                        <ul className={style.userSocial}>
                            <li className={style.userSocialItem}>
                                <a href={props.profile.contacts.twitter}
                                   className={style.userSocialLink}>
                                    <Twitter size={17} color={'#000'}/>
                                </a>
                            </li>
                            <li className={style.userSocialItem}>
                                <a href={props.profile.contacts.facebook}
                                   className={style.userSocialLink}>
                                    <Send size={17} color={'#000'}/>
                                </a>
                            </li>
                            <li className={style.userSocialItem}>
                                <a href={props.profile.contacts.website}
                                   className={style.userSocialLink}>
                                    <Globe size={17} color={'#000'}/>
                                </a>
                            </li>
                            <li className={style.userSocialItem}>
                                <a href={props.profile.contacts.github}
                                   className={style.userSocialLink}>
                                    <Github size={17} color={'#000'}/>
                                </a>
                            </li>
                            <li className={style.userSocialItem}>
                                <a href={`mailto:${props.profile.contacts.mainLink}`}
                                   className={style.userSocialLink}>
                                    <Mail size={17} color={'#000'}/>
                                </a>
                            </li>
                        </ul>
                        {userId
                            ? <div className={style.buttons}>
                                <a className={style.buttonLink} href="#">
                                    <Heart size={17} color={'#6d9985'}/>
                                    <span>Follow</span>
                                </a>
                                <a className={style.buttonLink} href="#">
                                    <MailPlus size={17} color={'#6d9985'}/>
                                    <span>Send message</span>
                                </a>
                            </div>
                            : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}