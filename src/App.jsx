import './App.css';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations'
import { AppBar } from './components/AppBar/AppBar'
import { PrivateRoute } from './guards/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './guards/RestrictedRoute/RestrictedRoute'
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'))
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'))

function App() {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    <strong>Refreshing user...</strong>
  ) : (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route 
            path='/register' 
            element={
              <RestrictedRoute 
                redirectTo='/contacts'
                componen={<RegistrationPage />}
              />
            } />
          <Route 
            path='/login' 
            element={
              <RestrictedRoute 
                redirectTo='/contacts'
                componen={<LoginPage />}
              />
            } />
          <Route 
            path='/contacts' 
            element={
              <PrivateRoute 
                redirectTo='/login'
                componen={<ContactsPage />}
              />
            } />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;
