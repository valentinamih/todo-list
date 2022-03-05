import style from './forms.module.css'

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <div className={style.form}>
            <input {...input} placeholder={label} type={type} className={style.input} autoFocus={true}/>
            {touched && ((error && <span className={style.error}>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)