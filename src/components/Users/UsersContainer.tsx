import {connect} from 'react-redux';
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../state/user-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {UsersClass} from './UsersClass';
import {Users} from './Users';

type MapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
}

export type UsersStateType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType) : MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType => {
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
        }

    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)