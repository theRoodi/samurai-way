import style from './FormsControl.module.css'

export const FormControl = ({input, meta, ...props}:any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                <props.child {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}