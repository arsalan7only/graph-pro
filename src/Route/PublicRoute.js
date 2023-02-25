import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/PreLogin/Login";

const PublicRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
    </div>
  );
};

export default PublicRoute;
