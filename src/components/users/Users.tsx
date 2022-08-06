import style from './Users.module.css';
import userPhoto from '../../assets/images/avatar_temp.png';
import React from 'react';
import {UsersPropsType} from './UsersContainer';


export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>

            <div>
                {pages.map(p => {
                    return <span className={`${props.currentPage === p && style.currentPage}`}
                                 onClick={() => {props.setCurrentPage(p)}}>{p}</span>
                })}
            </div>
            {props.usersPage.users.map(u => <div key={u.id}>
                <span>
                        <div>
                            <img className={style.userPhoto}
                                 src={u.photos.small != null
                                     ? u.photos.small
                                     : userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}

                        </div>
                </span>
                <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
            </div>)}
        </div>
    )
}