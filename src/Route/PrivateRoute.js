import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryList from "../Pages/Category/CategoryList";
import Brand from "../Pages/Postlogin/Brand/Brand";
import CustomerList from "../Pages/Postlogin/Customer/CustomerList";
import GalleryList from "../Pages/Postlogin/Gallary/GalleryList";

import Home from "../Pages/Postlogin/Home";
import SideBar from "../Pages/Postlogin/Nav/SideBar";
import OrderList from "../Pages/Postlogin/Order/OrderList";
import AddProduct from "../Pages/Postlogin/product/AddProduct";
import ProductList from "../Pages/Postlogin/product/ProductList";
import Transaction from "../Pages/Postlogin/Transaction/Transaction";

const PrivateRoute = () => {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/order/orderList" element={<OrderList />} />
            <Route path="/product/productList" element={<ProductList />} />
            <Route path="/category/categorylist" element={<CategoryList />} />
            <Route path="/product/addproduct" element={<AddProduct />} />
            <Route path="/brand/brandList" element={<Brand />} />
            <Route path="/customer/customerList" element={<CustomerList />} />
            <Route path="/gallery/gallerylist" element={<GalleryList />} />
            <Route path="/transaction" element={<Transaction />} />

            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
};

export default PrivateRoute;
