import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Postlogin/Home";

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default PrivateRoute;
