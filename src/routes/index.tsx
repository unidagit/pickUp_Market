import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "../pages/JoinPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/Product/ProductDetailPage";
import ProductSellerPage from "../pages/Product/ProductSellerPage";
import ProductUploadPage from "../pages/Product/ProductUploadPage";

export default function IRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/products/:id" element={<ProductDetailPage />}></Route>
        <Route path="/products/seller" element={<ProductSellerPage />}></Route>
        <Route
          path="/products/seller/upload"
          element={<ProductUploadPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
