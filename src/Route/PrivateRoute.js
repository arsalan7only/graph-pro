import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Postlogin/Home";
import SideBar from "../Pages/Postlogin/Nav/SideBar";
import OrderList from "../Pages/Postlogin/Order/OrderList";
import ProductList from "../Pages/Postlogin/Product/ProductList";
import CatogeryList from "../Pages/Postlogin/Category/CatogeryList";
import Brand from "../Pages/Postlogin/Brand/Brand";
import CustomerList from "../Pages/Postlogin/Customer/CustomerList";

const PrivateRoute = () => {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order/orderlist" element={<OrderList />} />
            <Route path="/product/productlist" element={<ProductList />} />
            <Route path="/catogery/catogeryList" element={<CatogeryList />} />
            <Route path="/brand/brandList" element={<Brand />} />
            <Route path="/customer/customerlist" element={<CustomerList />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
};

export default PrivateRoute;
