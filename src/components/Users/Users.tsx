import React from 'react';
import style from './Users.module.css'
import {InitialStateType, UserType} from '../../state/user-reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

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

    const followUser = (userId: string) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {} , {
            withCredentials: true,
            headers: {
                'API-KEY' : '0fcfa52c-cba5-484d-ae0d-56dac03d5456'
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.follow(userId)
                }
            })
    }
    const unfollowUser = (userId: string) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}` , {
            withCredentials: true,
            headers: {
                'API-KEY' : '0fcfa52c-cba5-484d-ae0d-56dac03d5456'
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.unfollow(userId)
                }
            })
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
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}` , {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY' : '0fcfa52c-cba5-484d-ae0d-56dac03d5456'
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                            })
                                    }}>Unfollow</button>
                                    // ? <button onClick={() => { followUser(u.id) }}>Unfollow</button>
                                    // : <button onClick={() => { unfollowUser(u.id) }}>Follow</button>}
                                    : <button onClick={() => { axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {} , {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY' : '0fcfa52c-cba5-484d-ae0d-56dac03d5456'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        }) }}>Follow</button>}
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
