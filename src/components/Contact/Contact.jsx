import style from './Contact.module.css'

const Contact = ({id, name, number, onDelete}) => {
    return (
        <li key={id} className={style['contact-item']}>
            <p className={style['contact-name']}>{name}</p>
            <p className={style['contact-number']}>{number}</p>
            <button
            onClick={() => onDelete(id)}
            className={style['delete-btn']}>Delete</button>
        </li>
    )
}

export default Contact