import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContextProvider';

const AuthRequired = ({children}) => {
    const isLogin = useContext(AuthContext)
  return (
    <>
        {isLogin ? children : <Navigate to='/'/>}
    </>
  )
}

export default AuthRequired