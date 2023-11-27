import {ReduxLoginForm} from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../state/authReducer';
import {Redirect} from 'react-router-dom';
import style from './Login.module.css'
import {AppStateType} from '../../redux/redux-store';

type FromDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string
}
const Login = (props:any) => {
    const onSubmit = (data: FromDataType) => {
        const {login, password, rememberMe, captcha} = data
        props.login( login, password, rememberMe,captcha)
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
            <ReduxLoginForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL
    }
}

export default connect(mapStateToProps, {login})(Login)

