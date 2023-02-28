import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BrandList from "../Pages/PostLogin/Brand/BrandList";
import CategoryList from "../Pages/PostLogin/Category/CategoryList";
import CustomerList from "../Pages/PostLogin/Customer/CustomerList";
import GalleryList from "../Pages/PostLogin/Gallery/GalleryList";
import Home from "../Pages/PostLogin/Home";
import SideBar from "../Pages/PostLogin/Nav/SideBar";
import OrderList from "../Pages/PostLogin/Order/OrderList";
import AddProduct from "../Pages/PostLogin/Product/AddProduct";
import ProductList from "../Pages/PostLogin/Product/ProductList";
import Transaction from "../Pages/PostLogin/Transaction/Transaction";

const PrivateRoute = () => {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order/orderList" element={< OrderList />} />
            <Route path="/product/productlist" element={<ProductList />} />
            <Route path="/product/addproduct" element={<AddProduct />} />
            <Route path="/category/categoryList" element={<CategoryList />} />
            <Route path="/brand/brandList" element={<BrandList />} />
            <Route path="/costomer/costomerList" element={<CustomerList />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/gallery/gelleryList" element={<GalleryList />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
};

export default PrivateRoute;
