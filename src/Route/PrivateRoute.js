import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../Pages/PostLogin/Nav/SideBar";

const PrivateRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SideBar />} />
      </Routes>
    </div>
  );
};

export default PrivateRoute;
