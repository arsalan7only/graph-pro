import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Postlogin/Home";
import SideBar from "../Pages/Postlogin/Nav/SideBar";

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SideBar />} />
    </Routes>
  );
};

export default PrivateRoute;
