import style from './ContactForm.module.css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contacts/operations'

const Validation = Yup.object().shape({
    name: Yup.string().required('Required').min(3, 'To short').max(50, 'To long'),
    number: Yup.string().required('Required').min(3, 'To short').max(50, 'To long')
})

const ContactForm = () => {
    const dispatch = useDispatch()

    const handleAddContact = (newContact, action) => {
    dispatch(addContact(newContact))
    action.resetForm()
    }
    
    return (
        <div className={style['formContainer']}>
            <Formik
            initialValues={{name: '', number: ''}}
            validationSchema={Validation}
            onSubmit={handleAddContact}>
                <Form className={style['form']}>
                    <div className={style['inputGroup']}>
                        <label htmlFor='name' className={style['label']}>Name</label>
                        <Field type='text' name='name' id='name' className={style['input']}/>
                        <ErrorMessage name='name' component='span' className={style['error']} />
                    </div>
                    <div className={style['inputGroup']}>
                        <label htmlFor='number' className={style['label']}>Number</label>
                        <Field type='text' name='number' id='number' className={style['input']}/>
                        <ErrorMessage name='number' component='span' className={style['error']} />
                    </div>
                    <button type='submit' className={style['button']}>Add contact</button>
                </Form>
            </Formik>
        </div>
    )
}

export default ContactForm