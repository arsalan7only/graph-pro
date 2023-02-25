import React from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Auth = () => {
  const userLogged = true;
  return <div>{userLogged ? <PrivateRoute /> : <PublicRoute />}</div>;
};

export default Auth;
