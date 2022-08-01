import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Users} from './Users';
import {AppStateType} from '../../redux/redux-store';
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from '../../redux/users-reducer';

type MapStatePropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
    }
    }

}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer