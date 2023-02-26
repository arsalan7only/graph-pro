import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Auth = () => {
  const select = useSelector((state) => state);
  const token = select.userReducer.token;
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    if (token.length > 0) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [token]);
  return <div>{logged ? <PrivateRoute /> : <PublicRoute />}</div>;
};

export default Auth;
