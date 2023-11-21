import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {logout} from '../../state/authReducer';
import {compose} from 'redux';

type MapStatePropsType = {
    isAuth: boolean,
    login: string
    userId: string
}

export class HeaderContainer extends React.Component<any, any> {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}
const mapStateToProps = (state: any): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId
    }
}

export default compose(connect(mapStateToProps, {logout}))(HeaderContainer)