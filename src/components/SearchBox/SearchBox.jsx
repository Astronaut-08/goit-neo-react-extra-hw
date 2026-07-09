import style from './SearchBox.module.css'
import {Formik, Form, Field} from 'formik'
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';

// використаємо для скидання значення фільтра при оновленні сторінки
import { useEffect } from 'react'; 


const SearchBox = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeFilter(''))
    }, [dispatch])

    return (
        <div className={style['search-container']}>
            <label htmlFor='query' className={style['search-label']}>
                Find contacts by name
            </label>
            <Formik initialValues={{query: ''}} onSubmit={() => {}}>
                {({handleChange}) => (
                    <Form className={style['search-box']}>
                        <Field 
                        type='text'
                        name='query'
                        className={style['search-input']}
                        onChange={(e) => {
                            handleChange(e);
                            dispatch(changeFilter(e.target.value));
                        }}/>  
                    </Form>
                )}
            </Formik>
        </div>
        
    )
}

export default SearchBox