import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from '../../redux/auth/selectors'

// Якщо коритсувач авторизований використовуємо 

export const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
    const isLogged = useSelector(selectIsLoggedIn)

    return isLogged ? Component : <Navigate to={redirectTo} />
}