import React from 'react';
import style from './Users.module.css'
import {InitialStateType, UserType} from '../../state/user-reducer';
import {NavLink} from 'react-router-dom';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    usersPage: InitialStateType
    onPageChange: (page: number) => void
    unfollow: (id: string) => void
    follow: (id: string) => void
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
                                         src={u.photos.small !== null ? u.photos.small : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png'}
                                         alt="avatar"/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
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
