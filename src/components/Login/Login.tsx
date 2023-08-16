import {ReduxLoginForm} from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../state/authReducer';
import {Redirect} from 'react-router-dom';

type FromDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const Login = (props:any) => {
    const onSubmit = (data: FromDataType) => {
        const {login, password, rememberMe} = data
        props.login( login, password, rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to='/profile' />
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)

