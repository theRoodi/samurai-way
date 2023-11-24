import React from 'react';
import style from './Post.module.css'
import avatar2 from '../../../../assets/images/avatar2.svg'
import avatar3 from '../../../../assets/images/avatar3.svg'
import {MessagesSquare, ThumbsUp, Trash2} from 'lucide-react';
import {ProfileType} from '../../../../state/profileReducer';
import avatar from '../../../../assets/images/defaultAvatar.png'

type PropsType = {
    message: string
    likes: number
    profile: ProfileType | null
}
export const Post = (props: PropsType) => {
    return (
        <div className={style.postContainer}>
            <div className={style.postItems}>
                <div className={style.postItem}>
                    <div className={style.postItemTitle}>
                        <a className={style.postItemTitleLink} href="#">
                            <img className={style.postItemTitleImg} src={props.profile?.photos.small || avatar} alt="avatar"/>
                            <span className={style.postItemTitleImgStatus}></span>
                        </a>
                        <div className={style.postItemTitleBox}>
                            <p className={style.postItemTitleName}>
                                <a href="#">{props.profile?.fullName}</a>
                                posted an update
                            </p>
                            <p className={style.postItemTitleDate}>
                                6 months ago
                            </p>
                            <div className={style.postItemTitleOption}>
                                <div className={style.postItemTitleOptionBtn}>
                                    <Trash2 size={17} color={'#adadad'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.postItemContent}>
                    <p className={style.postItemContentText}>{props.message}</p>
                </div>
                <div className={style.postItemInfo}>
                    <div className={style.postItemInfoBox}>
                        <ul className={style.postItemInfoBoxList}>
                            <li className={style.postItemInfoBoxListItem}>
                                <a className={style.postItemInfoBoxListLink} href="#">
                                    <img className={style.postItemInfoBoxListImg} src={avatar3} alt="avatar"/>
                                </a>
                            </li>
                            <li className={style.postItemInfoBoxListItem}>
                                <a className={style.postItemInfoBoxListLink} href="#">
                                    <img className={style.postItemInfoBoxListImg} src={avatar2} alt="avatar"/>
                                </a>
                            </li>
                            <li className={style.postItemInfoBoxListItem}>
                                <p className={style.postItemInfoBoxListText}>
                                    +{props.likes}
                                </p>
                            </li>
                        </ul>
                        <p className={style.postItemInfoBoxText}>
                            liked this post
                        </p>
                    </div>
                    <p className={style.postItemInfoText}>
                        <span>0 </span> Comments
                    </p>
                </div>
                <form action="#" className={style.postItemsBox}>
                    <div className={style.postItemsBoxLike}>
                        <ThumbsUp size={16} color={'#000'}/>
                        <span> Like</span>
                    </div>
                    <div className={style.postItemsBoxLike}>
                        <MessagesSquare  size={16} color={'#000'}/>
                        <span> Comment</span>
                    </div>
                </form>
            </div>
        </div>
    )
}