import React from 'react';
import style from './Users.module.css'
import axios from 'axios';
import {UsersStateType} from './UsersContainer';

export const Users = (props: UsersStateType) => {

    const getUsers = () => {

        if (props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={style.avatar}
                                 src={u.photos.small !== null ? u.photos.small : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png'}
                                 alt="avatar"/>
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
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>

                    </span>
                </div>)
            }
        </div>
    )
}
