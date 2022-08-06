import React from 'react';
import axios from 'axios';
import {UsersPropsType} from './UsersContainer';
import {Users} from './Users';


export class UsersAPIContainer extends React.Component<UsersPropsType, UsersPropsType> {

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

        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      setCurrentPage={this.onPageChanged}
                      usersPage={this.props.usersPage}
                      setUsers={this.props.setUsers}
                      setTotalUsersCount={this.props.setTotalUsersCount}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>
    }
}