import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/avatar_temp.png';
import axios from 'axios';
import {UsersPropsType} from './UsersContainer';


export class Users extends React.Component<UsersPropsType, UsersPropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>

                <div>
                    {pages.map(p => {
                        return <span className={`${this.props.currentPage === p && style.currentPage}`}
                        onClick={() => {this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {this.props.usersPage.users.map(u => <div key={u.id}>
                <span>
                        <div>
                            <img className={style.userPhoto}
                                 src={u.photos.small != null
                                     ? u.photos.small
                                     : userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}

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
}