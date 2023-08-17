import {connect} from 'react-redux';
import {
    follow,
    getUsers,
    InitialStateType,
    setCurrentPage,
    setFollowing,
    unfollow,
    UserType
} from '../../state/user-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Users} from './Users';
import React from 'react';
import {Preloader} from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalUsersCount,
    getUser
} from '../../state/usersSelectors';

type MapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: number[]
}

type MapDispatchPropsType = {
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setToggle: (isFetching: boolean) => void
    setFollowing: (isFollowing: boolean, id: number) => void
}

export type UsersStateType = MapStatePropsType & MapDispatchPropsType

// const mapStateToProps = (state: AppStateType): MapStatePropsType => {
//     return {
//         usersPage: state.usersPage,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowing: state.usersPage.isFollowing
//     }
// }

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: getUser(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state)
    }
}
export class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (p: number) => {
        this.props.getUsers(p, this.props.pageSize)
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
                         isFetching={this.props.isFetching}
                         isFollowing={this.props.isFollowing}
                         setFollowing={this.props.setFollowing}/>}
        </>
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {setCurrentPage, setFollowing, getUsers, follow, unfollow})
)(UsersContainer)