import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Postlogin/Home";

const PrivateRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" excat element={<Home />} />
      </Routes>
    </div>
  );
};

export default PrivateRoute;
