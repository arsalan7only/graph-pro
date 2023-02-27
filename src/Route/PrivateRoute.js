import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BrandList from "../Pages/PostLogin/Brand/BrandList";
import CategoryList from "../Pages/PostLogin/Category/CategoryList";
import CustomerList from "../Pages/PostLogin/Customer/CustomerList";
import Home from "../Pages/PostLogin/Home";
import SideBar from "../Pages/PostLogin/Nav/SideBar";
import OrderList from "../Pages/PostLogin/Order/OrderList";
import ProductList from "../Pages/PostLogin/Product/ProductList";

const PrivateRoute = () => {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order/orderList" element={< OrderList />} />
            <Route path="/product/productlist" element={<ProductList />} />
            <Route path="/category/categoryList" element={<CategoryList />} />
            <Route path="/brand/brandList" element={<BrandList />} />
            <Route path="/costomer/costomerList" element={<CustomerList />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
};

export default PrivateRoute;
