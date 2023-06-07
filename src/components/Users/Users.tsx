import React from 'react';
import {UserType} from '../../state/user-reducer';
import style from './Users.module.css'
import {v1} from 'uuid';

type PropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: PropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png',
                followed: false,
                fullName: 'Dmitry',
                status: 'ZBS',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: v1(),
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/New_user_icon-01.svg/1063px-New_user_icon-01.svg.png',
                followed: true,
                fullName: 'Igor',
                status: 'GOOD',
                location: {city: 'Kirov', country: 'Russia'}
            },
            {
                id: v1(),
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/New_user_icon-01.svg/1063px-New_user_icon-01.svg.png',
                followed: false,
                fullName: 'Sasha',
                status: 'GGWP',
                location: {city: 'LA', country: 'USA'}
            }
        ])

    }


    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={style.avatar} src={u.photoUrl} alt="avatar"/>
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
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
