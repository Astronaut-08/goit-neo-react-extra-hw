import { Navigations } from '../Navigations/Navigations'
import { UserMenu } from '../UserMenu/UserMenu'
import { useSelector } from 'react-redux'
import { AuthNav } from '../AuthNav/AuthNav'
import { selectSiLoggedIn } from '../../redux/auth/selectors'
import style from './AppBar.module.css'

export const AppBar = () => {
    const isLogged = useSelector(selectSiLoggedIn)

    return (
        <header className={style.header}>
            <Navigations />
            {isLogged ? <UserMenu /> : <AuthNav />}
        </header>
    )
}