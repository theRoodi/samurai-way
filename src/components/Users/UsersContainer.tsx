import {connect} from 'react-redux';
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from '../../state/user-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {UsersClass} from './UsersClass';

type MapStatePropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersStateType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType) : MapStatePropsType => {
    return {
        usersPage: state.usersPage
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
        }

    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)