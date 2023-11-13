import React from 'react';
import style from './Users.module.css'
import {UserType} from '../../state/user-reducer';
import {NavLink} from 'react-router-dom';
import avatar from './../../assets/images/defaultAvatar.png'

type PropsType = {
    user: UserType
    isFollowing: number[]
    follow: (id: number) => void
    unfollow: (id: number) => void
}
export const User = ({user, isFollowing, unfollow, follow}: PropsType) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={style.avatar}
                             src={user.photos.small !== null ? user.photos.small : avatar}
                             alt="avatar"/>
                    </NavLink>
                    {user.followed
                        ? <button disabled={isFollowing.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollow</button>
                        : <button disabled={isFollowing.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>}
                        </div>
                     </span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
        </div>
    )
}
