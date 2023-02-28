import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Brandlist from "../Pages/Postlogin/Brand/Brandlist";
import Customerlist from "../Pages/Postlogin/Customer/Customerlist";
import Home from "../Pages/Postlogin/Home";
import SideBar from "../Pages/Postlogin/Nav/SideBar";
import OrderList from "../Pages/Postlogin/Order/OrderList";
import Addproduct from "../Pages/Postlogin/Product/Addproduct";
import ProductList from "../Pages/Postlogin/Product/ProductList";

const PrivateRoute = () => {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/productlist" element={<ProductList />} />
            <Route path="/order/orderList" element={<OrderList />} />
            <Route path="/product/addproduct" element={<Addproduct />} />
            <Route path="/brand/brandlist" element={<Brandlist />} />
            <Route path="/customer/customerlist" element={<Customerlist />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
};

export default PrivateRoute;
