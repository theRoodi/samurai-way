import style from './FormsControl.module.css'
import {Field} from 'redux-form';

export const FormControl = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + ' ' + (hasError && style.error)}>
            <div>
                <props.child {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = (props:any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder: string, name: string, validator: string[], component:any, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder}
               component={component}
               validate={validator}
               name={name}
               {...props}/> {text}
    </div>
)