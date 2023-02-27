import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Postlogin/Home";
import SideBar from "../Pages/Postlogin/Nav/SideBar";
import OrderList from "../Pages/Postlogin/Order/OrderList";

const PrivateRoute = () => {
  return (
    <Routes>
        <SideBar></SideBar>
        <Route path="/" element={<Home />} />
        <Route path="/orderList" element={<OrderList />} />
      </Routes>
    
  );
};

export default PrivateRoute;
