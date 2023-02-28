import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BrandList from "../Pages/Postlogin/Brand/BrandList";
import CategoryList from "../Pages/Postlogin/Category/CategoryList";
import CustomerList from "../Pages/Postlogin/Customer/CustomerList";
import Home from "../Pages/Postlogin/Home";
import SideBar from "../Pages/Postlogin/Nav/SideBar";
import OrderList from "../Pages/Postlogin/Order/OrderList";
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
            <Route path="/brand/brandList" element={<BrandList />} />
            <Route path="/category/categorytlist" element={<CategoryList />} />
            <Route path="/customer/customerList" element={<CustomerList />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
};

export default PrivateRoute;
