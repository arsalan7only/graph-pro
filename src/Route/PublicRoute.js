import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Pages/PreLogin/Login";

const PublicRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<> Not Found</>} />
      </Routes>
    </Router>
  );
};

export default PublicRoute;
