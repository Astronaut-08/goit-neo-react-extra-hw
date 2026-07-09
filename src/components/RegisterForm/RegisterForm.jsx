import { useDispatch } from "react-redux";
import { register } from '../../redux/auth/operations'
import style from './RegisterForm.module.css'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'

const Validator = Yup.object().shape({
    name: Yup.string()
            .min(2, "Ім'я має містити щонайменше 2 символи")
            .max(50, "Ім'я занадто довге")
            .required("Введіть ваше ім'я"),
    email: Yup.string()
            .email('Невійрний формат електронної адреси')
            .required('Введіть ваш email'),
    password: Yup.string()
            .min(2, "Пароль має містити щонайменше 8 символів")
            .max(50, "Пароль занадто довгий")
            .required("Введіть ваш пароль"),
})

export const RegisterForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = async (value) => {
        dispatch(
            register({
            name: value.name,
            email: value.email,
            password: value.password
        })
        )
    }

    return (
        <Formik
        initialValues={{
            name: '',
            email: '',
            password: ''
        }}
        validationSchema={Validator}
        onSubmit={(value, action) => {
            handleSubmit(value)
            action.resetForm()
        }}>
            <Form className={style.form} >
                <label className={style.label}>Name</label>
                <Field type='text' name='name' id='name' placeholder='Volodymyr' className={style.input}/>
                <ErrorMessage name="name" component='span' className={style.error}/>
                <label className={style.label}>Email</label>
                <Field type='email' name='email' id='email' placeholder='example@gmail.com' className={style.input}/>
                <ErrorMessage name="email" component='span' className={style.error}/>
                <label className={style.label}>Password</label>
                <Field type='password' name='password' id='password' placeholder='********' className={style.input}/>
                <ErrorMessage name="password" component='span' className={style.error}/>
                <button type="submit" className={style.button}>Register</button>
            </Form>
        </Formik>
    )
}