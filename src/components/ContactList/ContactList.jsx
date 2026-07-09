import style from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector, useDispatch } from 'react-redux'
import { selectError, selectFilteredContacts, selectLoading } from '../../redux/contacts/selectors'
import { deleteContact, fetchContacts } from '../../redux/contacts/operations'
import { useEffect } from 'react'


const ContactList = () => {
    const dispatch = useDispatch()
    const filteredList = useSelector(selectFilteredContacts)
    const isLoading = useSelector(selectLoading)
    const isError = useSelector(selectError)

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id))
    };

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <div className={style['phonebook-container']}>
            <ul className={style['phonebook-list']}>
                {!isLoading && !isError && filteredList.map((contacts) => {
                    return (
                        <Contact 
                        key={contacts.id} 
                        id={contacts.id} 
                        name={contacts.name} 
                        number={contacts.number}
                        onDelete={handleDeleteContact}/>
                    )
                })}
            </ul>
        </div>
        
    )
}

export default ContactList