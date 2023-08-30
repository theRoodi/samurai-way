import {ReduxLoginForm} from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../state/authReducer';
import {Redirect} from 'react-router-dom';
import style from './Login.module.css'

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
        <div className={style.container}>
            <span className={style.infoBox}>For test this project
                <br/> You can use this data
                <br/> Login: <strong>free@samuraijs.com</strong>
                <br/> Password: <strong>free</strong></span>
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

