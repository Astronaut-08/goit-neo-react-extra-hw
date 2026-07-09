import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import style from './UserMenu.module.css'

export const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    return (
        <div className={style.wrapper}>
            <p className={style.username}>Welcome, {user.name}</p>
            <button type="button" onClick={() => dispatch(logout())}>
                LogOut
            </button>
        </div>
    )
}