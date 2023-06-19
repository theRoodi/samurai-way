import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {auth, setAuthUserData} from '../../state/authReducer';

type MapStatePropsType = {
    isAuth: boolean,
    login: string
}
export class HeaderContainer extends React.Component<any, any>{

    componentDidMount() {
        this.props.auth()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: any):MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData, auth})(HeaderContainer)