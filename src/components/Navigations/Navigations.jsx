import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import style from './Navigations.module.css'

export const Navigations = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <nav>
            <NavLink className={style.link} to='/'>
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={style.link} to='/contacts'>
                    Contacts
                </NavLink>
            )}
        </nav>
    )
}
