import React from 'react'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Auth=() =>{
    const userLogged=false;
  return (
    <div>{userLogged ? <PrivateRoute/>: <PublicRoute/>}</div>
  )
}
export default Auth;
