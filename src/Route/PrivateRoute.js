import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BrandList from "../Pages/Postlogin/Brand/BrandList";
import AddCategory from "../Pages/Postlogin/Category/AddCategory";
import CategoryList from "../Pages/Postlogin/Category/CategoryList";
import AddCoupenCode from "../Pages/Postlogin/Coupen/AddCoupenCode";
import AddNewCustomer from "../Pages/Postlogin/Customer/AddNewCustomer";
import CustomerList from "../Pages/Postlogin/Customer/CustomerList";
import AddGallery from "../Pages/Postlogin/Gallery/AddGallery";
import Home from "../Pages/Postlogin/Home";
import SideBar from "../Pages/Postlogin/Nav/SideBar";
import OrderList from "../Pages/Postlogin/Order/OrderList";
import AddProduct from "../Pages/Postlogin/Product/AddProduct";
import ProductList from "../Pages/Postlogin/Product/ProductList";
import Transaction from "../Pages/Postlogin/Transaction";

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
            <Route path="/order/addcoupencode" element={<AddCoupenCode />} />
            <Route path="/brand/brandList" element={<BrandList />} />
            <Route path="/category/categorytlist" element={<CategoryList />} />
            <Route path="/addcategory/addcategory" element={<AddCategory />} />
            <Route path="/customer/customerList" element={<CustomerList />} />
            <Route path="/customer/addnewcustomer" element={<AddNewCustomer />} />
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
