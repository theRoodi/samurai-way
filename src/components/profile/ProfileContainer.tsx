import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getProfile, getStatus, ProfileType, updateStatus} from '../../state/profileReducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {authRedirect} from '../../hoc/AuthRedirect';
import {compose} from 'redux';

type PathParamType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean

}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type MapPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & MapPropsType

export class ProfileContainer extends React.Component<any, PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    authRedirect
)(ProfileContainer)