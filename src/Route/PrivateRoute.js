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
import Transaction from "../Pages/Postlogin/Transaction/Transaction";
import { AddCategory } from "../Pages/Postlogin/Category/AddCategory";
import AddNewCustomer from "../Pages/Postlogin/Customer/AddNewCustomer";
import AddCoupenCode from "../Pages/Postlogin/Coupen/AddCoupenCode";
import AddOrder from "../Pages/Postlogin/Order/AddOrder";
import AddGallery from "../Pages/Postlogin/Gallery/AddGallery";

const PrivateRoute = () => {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order/orderlist" element={<OrderList />} />
            <Route path="/order/addorder" element={<AddOrder />} />
            <Route path="/product/productlist" element={<ProductList />} />
            <Route path="/product/addproduct" element={<AddProduct />} />
            <Route path="/category/categorylist" element={<CategoryList />} />
            <Route path="/category/addcategory" element={<AddCategory />} />
            <Route path="/brand/brandList" element={<Brand />} />
            <Route path="/customer/customerlist" element={<CustomerList />} />
            <Route path="/customer/addnewcustomer" element={<AddNewCustomer />} />
            <Route path="/coupencode/addcoupencode" element={<AddCoupenCode />} />
            <Route path="/gallery/addgallery" element={<AddGallery />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
};

export default PrivateRoute;
