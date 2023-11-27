import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FormControl} from '../common/FormsControl/FormsControl';
import {requiredFiled} from '../../utils/validator';
import style from '../common/FormsControl/FormsControl.module.css'

type FromDataType = {
    login: string
    password: string
    rememberMe: boolean
}
type PropsLoginForm = {
    captchaURL: string
}
export const LoginForm: React.FC<PropsLoginForm & InjectedFormProps<FromDataType, PropsLoginForm>> = ({
                                                                                                          handleSubmit,
                                                                                                          error,
                                                                                                          captchaURL
                                                                                                      }) => {
    console.log(captchaURL + ' here ')
    return (
        <div className={style.loginBlock}>
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

                {captchaURL && <img src={captchaURL} alt="captcha"/>}
                {captchaURL && <Field placeholder={'Captcha'}
                                      component={FormControl}
                                      child="input"
                                      name="captcha"
                                      type="captcha"
                                      validate={[requiredFiled]}/>}

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
export const ReduxLoginForm: any = reduxForm<FromDataType, PropsLoginForm>({
    form: 'login'
})(LoginForm)