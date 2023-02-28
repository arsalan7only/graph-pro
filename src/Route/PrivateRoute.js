import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Postlogin/Home";
import SideBar from "../Pages/Postlogin/Nav/SideBar";
import OrderList from "../Pages/Postlogin/Order/OrderList"
import AddProduct from "../Pages/Postlogin/Product/AddProduct";
import ProductList from "../Pages/Postlogin/Product/ProductList";

const PrivateRoute = () => {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/productlist" element={<ProductList />} />
            <Route path="/product/addproduct" element={<AddProduct />} />
            <Route path="/order/orderList" element={<OrderList />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
};

export default PrivateRoute;
