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

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChange = (p:number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {
                        pages.map( p => {
                            return <span onClick={()=> this.onPageChange(p)}>{p + " "}</span>
                        })
                    }
                    {/*<span className={style.selectedPage}>1</span>*/}
                    {/*<span>2</span>*/}
                    {/*<span>3</span>*/}
                    {/*<span>4</span>*/}
                    {/*<span>5</span>*/}
                </div>
                {
                    this.props.usersPage.users.map((u: any) => <div key={u.id}>
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