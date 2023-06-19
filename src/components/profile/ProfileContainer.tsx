import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getProfile, ProfileType, setUserProfile} from '../../state/profileReducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type MapPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & MapPropsType

export class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const ProfileWithURL = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile, getProfile})(ProfileWithURL)