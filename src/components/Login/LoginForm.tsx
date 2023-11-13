import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FormControl} from '../common/FormsControl/FormsControl';
import {requiredFiled} from '../../utils/validator';
import style from '../common/FormsControl/FormsControl.module.css'

type FromDataType = {
    login: string
    password: string
    rememberMe: boolean
}
export const LoginForm: React.FC<InjectedFormProps<FromDataType>> = ({handleSubmit, error}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div><Field placeholder={'Login'}
                            component={FormControl}
                            child="input"
                            name="login"
                            type="login"
                            validate={[requiredFiled]}/></div>
                <div><Field placeholder={'Password'}
                            component={FormControl}
                            child="input"
                            name="password"
                            type="password"
                            validate={[requiredFiled]}/></div>
                <div><Field component={FormControl}
                            child="input"
                            type="checkbox"
                            name="rememberMe"/>remember me
                </div>
                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}
export const ReduxLoginForm = reduxForm<FromDataType>({
    form: 'login'
})(LoginForm)