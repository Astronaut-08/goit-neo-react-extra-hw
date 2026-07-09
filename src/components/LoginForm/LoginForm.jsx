import { useDispatch } from "react-redux";
import { login } from '../../redux/auth/operations'
import style from './LoginForm.module.css'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'

const Validator = Yup.object().shape({
    email: Yup.string()
            .email('Невійрний формат електронної адреси')
            .required('Введіть ваш email'),
    password: Yup.string()
            .min(2, "Пароль має містити щонайменше 8 символів")
            .max(50, "Пароль занадто довгий")
            .required("Введіть ваш пароль"),
})

export const LoginForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = async (value) => {
        dispatch(
            login({
            email: value.email,
            password: value.password
        })
        )
    }

    return (
        <Formik
        initialValues={{
            email: '',
            password: ''
        }}
        validationSchema={Validator}
        onSubmit={(value, action) => {
            handleSubmit(value)
            action.resetForm()
        }}>
            <Form className={style.form} >
                <label className={style.label}>Email</label>
                <Field type='email' name='email' id='email' placeholder='example@gmail.com' className={style.input}/>
                <ErrorMessage name="email" component='span' className={style.error}/>
                <label className={style.label}>Password</label>
                <Field type='password' name='password' id='password' placeholder='********' className={style.input}/>
                <ErrorMessage name="password" component='span' className={style.error}/>
                <button type="submit" className={style.button}>Login</button>
            </Form>
        </Formik>
    )
}