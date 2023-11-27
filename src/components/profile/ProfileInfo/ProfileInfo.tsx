import React, {useState} from 'react';
import style from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfilePhotoType, ProfileType} from '../../../state/profileReducer';
import avatar from '../../../assets/images/defaultAvatar.png';
import {ProfileStatusHooks} from '../ProfileStatus/ProfileStatusHooks';
import {Github, Globe, Heart, Mail, MailPlus, Send, Twitter} from 'lucide-react';
import {useParams} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {FormControl} from '../../common/FormsControl';
import {requiredFiled} from '../../../utils/validator';

export type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: ProfilePhotoType) => void
    saveProfile: (data: any) => any
}
export const ProfileInfo = (props: PropsType) => {

    const [editMode, setEditMode] = useState(false)

    const onChangePhoto = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (data: any) => {
        props.saveProfile(data).then(() => {
            setEditMode(false)
        })
    }

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={style.contentContainer}>
            <div className={style.userBlock}>
                <div className={style.avatar}>
                    <img className={style.img}
                         src={props.profile.photos.large || avatar} alt=""/>
                    {props.isOwner && <input type="file" onChange={onChangePhoto}/>}
                    <span className={style.avatarStatus}></span>
                </div>
                {editMode
                    ? <ReduxProfileDataForm initialValues={props.profile}
                                            profile={props.profile}
                                            status={props.status}
                                            updateStatus={props.updateStatus}
                                            isOwner={props.isOwner}
                                            onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile}
                                   status={props.status}
                                   updateStatus={props.updateStatus}
                                   isOwner={props.isOwner}
                                   toggleEditMode={() => {
                                       setEditMode(true)
                                   }}/>}

            </div>
        </div>
    )
}

export type ProfileDataType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    toggleEditMode?: () => void
    handleSubmit?: (formData: any) => void
}
const ProfileData = (props: ProfileDataType) => {
    // @ts-ignore
    const {userId} = useParams()

    return (

        <div className={style.descriptionBlock}>
            {props.isOwner && <div>
                <button onClick={props.toggleEditMode}>Edit info</button>
            </div>}
            <p className={style.userLookingJob}>
                {props.profile.lookingForAJobDescription}
            </p>
            <p className={style.userName}>{props.profile.fullName}</p>
            <p className={style.userText} style={{'paddingBottom': '15px'}}>
                Looking for job: {props.profile.lookingForAJob ? 'yes' : 'no'}
            </p>
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
                        <a href={props.profile?.contacts?.twitter}
                           className={style.userSocialLink}>
                            <Twitter size={17} color={'#000'}/>
                        </a>
                    </li>
                    <li className={style.userSocialItem}>
                        <a href={props.profile?.contacts?.facebook}
                           className={style.userSocialLink}>
                            <Send size={17} color={'#000'}/>
                        </a>
                    </li>
                    <li className={style.userSocialItem}>
                        <a href={props.profile?.contacts?.website}
                           className={style.userSocialLink}>
                            <Globe size={17} color={'#000'}/>
                        </a>
                    </li>
                    <li className={style.userSocialItem}>
                        <a href={props.profile?.contacts?.github}
                           className={style.userSocialLink}>
                            <Github size={17} color={'#000'}/>
                        </a>
                    </li>
                    <li className={style.userSocialItem}>
                        <a href={`mailto:${props.profile?.contacts?.mainLink}`}
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
    )
}

const ProfileDataForm: any = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <div><b>Full name : </b>
                    <Field placeholder={'Full name'}
                           component={FormControl}
                           child="input"
                           name="fullName"
                           type="fullName"
                           validate={[requiredFiled]}/>
                </div>
                <div><b>Looking for a job? : </b>
                    <Field component={FormControl}
                           child="input"
                           type="checkbox"
                           name="lookingForAJob"/>
                </div>
                <div><b>My skills : </b>
                    <Field placeholder={'Skills'}
                           component={FormControl}
                           child="textarea"
                           name="lookingForAJobDescription"
                           type="lookingForAJobDescription"
                           validate={[requiredFiled]}/>
                </div>
                <div><b>About me: </b>
                    <Field placeholder={'About me'}
                           component={FormControl}
                           child="textarea"
                           name="aboutMe"
                           type="aboutMe"
                           validate={[requiredFiled]}/>
                </div>
                <div><b>Contacts: </b>
                    {Object.keys(props.profile.contacts ).map(key => {
                        return <div key={key} className={style.contacts}>
                            <b>{key}: </b>
                            <Field placeholder={key}
                                   component={FormControl}
                                   child="input"
                                   name={'contacts.' + key}
                                   type="contacts"
                                   validate={[requiredFiled]}/>
                        </div>
                    })}
                </div>
            </div>
        </form>
    )
}

export const ReduxProfileDataForm: any = reduxForm<any>({form: 'edit-profile'})(ProfileDataForm)
