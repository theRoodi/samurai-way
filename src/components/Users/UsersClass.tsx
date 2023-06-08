import React from 'react';
import style from './Users.module.css';
import axios from 'axios';
import {UsersStateType} from './UsersContainer';

// export type PropsUsersType = {
//     users: Array<UserType>
//     follow: (userId: string) => void
//     unfollow: (userId: string) => void
//     setUsers: (users: Array<UserType>) => void
// }

export class UsersClass extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return (
            <div>
                {
                    this.props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <img className={style.avatar}
                                 src={u.photos.small !== null ? u.photos.small : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png'}
                                 alt="avatar"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
}