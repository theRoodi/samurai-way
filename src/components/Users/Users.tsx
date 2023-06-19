import React from 'react';
import style from './Users.module.css'
import {InitialStateType, UserType} from '../../state/user-reducer';
import {NavLink} from 'react-router-dom';
import avatar from './../../assets/images/defaultAvatar.png'

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isFollowing: number[]
    usersPage: InitialStateType
    onPageChange: (page: number) => void
    unfollow: (id: number) => void
    follow: (id: number) => void
    setFollowing: (isFollowing: boolean, id: number) => void
}
export const Users = (props: PropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? style.selectedPage : ''}
                                     onClick={() => props.onPageChange(p)}>{p + ' '}</span>
                    })
                }
            </div>
            {
                props.usersPage.users.map((u: UserType) => <div key={u.id}>
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img className={style.avatar}
                                         src={u.photos.small !== null ? u.photos.small : avatar}
                                         alt="avatar"/>
                                </NavLink>
                                {u.followed
                                    ? <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>}
                            </div>
                         </span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </div>
                </div>)
            }
        </div>
    )
}
