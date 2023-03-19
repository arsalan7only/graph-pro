import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "../Pages/PostLogin/Nav/SideBar";
import Home from "../Pages/PostLogin/Home";
import OrderList from "../Pages/PostLogin/Order/OrderList";
import ProductList from "../Pages/PostLogin/Product/ProductList";
import AddProduct from "../Pages/PostLogin/Product/AddProduct";
import CategoryList from "../Pages/PostLogin/Category/CategoryList";
import AddCategory from "../Pages/PostLogin/Category/AddCategory";
import BrandList from "../Pages/PostLogin/Brand/BrandList";
import CustomerList from "../Pages/PostLogin/Customer/CustomerList";
import AddCustomer from "../Pages/PostLogin/Customer/AddCustomer";
import EditCustomer from "../Pages/PostLogin/Customer/EditCustomer";
import AddCoupenCode from "../Pages/PostLogin/Coupen/AddCoupenCode";
import AddGallery from "../Pages/PostLogin/Gallery/AddGallery";
import Transaction from "../Pages/PostLogin/Transaction/Transaction";

const PrivateRoute = () => {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order/orderList" element={<OrderList />} />
            <Route path="/product/productlist" element={<ProductList />} />
            <Route path="/product/addproduct" element={<AddProduct />} />
            <Route path="/category/categoryList" element={<CategoryList />} />
            <Route path="/category/addCategory" element={<AddCategory />} />
            <Route path="/brand/brandList" element={<BrandList />} />
            <Route path="/costomer/costomerList" element={<CustomerList />} />
            <Route path="/costomer/addcustomer" element={<AddCustomer />} />
            <Route path="/costomer/editcustomer/:id" element={<EditCustomer />} />
            <Route path="/coupen/coupencode" element={<AddCoupenCode />} />
            <Route path="/gallery/addgallery" element={<AddGallery />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="*" element={<> Not Found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
};

export default PrivateRoute;
