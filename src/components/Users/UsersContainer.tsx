import {connect} from 'react-redux';
import {
    followAC,
    InitialStateType,
    setCurrentPageAC, setToggleAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../state/user-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {Users} from './Users';
import React from 'react';
import axios from 'axios';
import {Preloader} from '../common/Preloader/Preloader';

type MapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setToggle: (isFetching: boolean) => void
}

export type UsersStateType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
        setToggle: (isFetching: boolean) => {
            dispatch(setToggleAC(isFetching))
        }

    }
}

export class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.setToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.setToggle(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChange = (p: number) => {
        this.props.setToggle(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.setToggle(false)
                this.props.setUsers(response.data.items)
            })
    }


    render() {

        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         onPageChange={this.onPageChange}
                         usersPage={this.props.usersPage}
                         unfollow={this.props.unfollow}
                         follow={this.props.follow}
                         currentPage={this.props.currentPage}
                         isFetching={this.props.isFetching}/>}
        </>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)