import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {auth, logout} from '../../state/authReducer';
import {compose} from 'redux';

type MapStatePropsType = {
    isAuth: boolean,
    login: string
}

export class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.auth()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}
// 76-78 lessons!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const mapStateToProps = (state: any): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default compose(connect(mapStateToProps, {auth, logout}))(HeaderContainer)