import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Postlogin/Home";
import SideBar from "../Pages/Postlogin/Nav/SideBar";
import OrderList from "../Pages/Postlogin/Order/OrderList";
import ProductList from "../Pages/Postlogin/Product/ProductList";
import Brand from "../Pages/Postlogin/Brand/Brand";
import CustomerList from "../Pages/Postlogin/Customer/CustomerList";
import AddProduct from "../Pages/Postlogin/Product/AddProduct";
import CategoryList from "../Pages/Postlogin/Category/CategoryList";
import GalleryList from "../Pages/Postlogin/Gallery/GalleryList";
import Transaction from "../Pages/Postlogin/Transaction/Transaction";

const PrivateRoute = () => {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order/orderlist" element={<OrderList />} />
            <Route path="/product/productlist" element={<ProductList />} />
            <Route path="/product/addproduct" element={<AddProduct />} />
            <Route path="/category/categorylist" element={<CategoryList />} />
            <Route path="/brand/brandList" element={<Brand />} />
            <Route path="/customer/customerlist" element={<CustomerList />} />
            <Route path="/gallery/galleryList" element={<GalleryList />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
};

export default PrivateRoute;
