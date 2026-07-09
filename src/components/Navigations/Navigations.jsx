import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSiLoggedIn } from '../../redux/auth/selectors'
import style from './Navigations.module.css'

export const Navigations = () => {
    const isLoggedIn = useSelector(selectSiLoggedIn)

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
