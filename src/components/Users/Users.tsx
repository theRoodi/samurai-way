import React from 'react';
import {InitialStateType, UserType} from '../../state/user-reducer';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User';

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

    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChange={props.onPageChange}
                       portionSize={15}/>

            {
                props.usersPage.users.map((u: UserType) => (
                    <User key={u.id}
                          user={u}
                          isFollowing={props.isFollowing}
                          follow={props.follow}
                          unfollow={props.unfollow}/>
                ))
            }
        </div>
    )
}
