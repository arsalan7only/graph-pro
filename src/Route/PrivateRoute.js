import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/PostLogin/Home";

const PrivateRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
};

export default PrivateRoute;
