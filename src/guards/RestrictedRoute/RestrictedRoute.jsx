import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from '../../redux/auth/selectors'

// Якщо коритсувач не авторизований використовуємо 

export const RestrictedRoute = ({componen: Component, redirectTo = '/'}) => {
    const isLogged = useSelector(selectIsLoggedIn)

    return isLogged ? <Navigate to={redirectTo} /> : Component 
}