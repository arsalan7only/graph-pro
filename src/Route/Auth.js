import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Auth = () => {
  //!{useSelectors Starts}//
  const select = useSelector((state) => state);
  const token = select.UserReducer.token;

  //!{useStates Starts}//
  const [Logged, setLogged] = useState(false);
  
  //!{useEffects Starts}
  useEffect(() => {
    if (token.length > 0) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [token]);

  return <div>{Logged ? <PrivateRoute /> : <PublicRoute />}</div>;
};

export default Auth;
