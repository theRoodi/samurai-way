import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FromDataType = {
    login: string
    password: string
    rememberMe: boolean
}
export const Login = () => {
    const onSubmit = (data: FromDataType) => {
        console.log(data)
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}
export const LoginForm: React.FC<InjectedFormProps<FromDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={'Login'}
                            component={'input'}
                            name="login"
                            type="login"/></div>
                <div><Field placeholder={'Password'}
                            component={'input'} name="password"
                            type="password"/></div>
                <div><Field component={'input'}
                            type="checkbox"
                            name="rememberMe"/>remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const ReduxLoginForm = reduxForm<FromDataType>({
    form: 'login'
})(LoginForm)