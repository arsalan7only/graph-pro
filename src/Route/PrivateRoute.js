import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Postlogin/Home";
import SideBar from "../Pages/Postlogin/Nav/SideBar";
import OrderList from "../Pages/Postlogin/Order/OrderList";
import ProductList from "../Pages/Postlogin/Product/ProductList";
import CatogeryList from "../Pages/Postlogin/Category/CatogeryList";
import BrandList from "../Pages/Postlogin/Brand/BrandList";
import CustomerList from "../Pages/Postlogin/Customer/CustomerList";
import AddProduct from "../Pages/Postlogin/Product/AddProduct";
import AddCategory from "../Pages/Postlogin/Category/AddCategory";
import AddCustomer from "../Pages/Postlogin/Customer/AddCustomer";
import AddCoupen from "../Pages/Postlogin/Coupen/AddCoupen";
import AddGallery from "../Pages/Postlogin/Gallery/AddGallery";

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
            <Route path="/catogery/catogeryList" element={<CatogeryList />} />
            <Route path="/category/addcategory" element={<AddCategory />} />
            <Route path="/brand/brandList" element={<BrandList />} />
            <Route path="/customer/customerlist" element={<CustomerList />} />
            <Route path="/customer/addcustomer" element={<AddCustomer />} />
            <Route path="/coupen/addcoupen" element={<AddCoupen />} />
            <Route path="/gallery/addgallery" element={<AddGallery />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
};

export default PrivateRoute;
