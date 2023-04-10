import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/Product/ProductDetailPage";
import ProductSellerPage from "../pages/Product/ProductSellerPage";
import ProductUploadPage from "../pages/Product/ProductUploadPage";
import JoinPage from "../pages/JoinPage";

export default function IRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/join" element={<JoinPage />}></Route>
        <Route path="/products/:id" element={<ProductDetailPage />}></Route>
        <Route path="/seller" element={<ProductSellerPage />}></Route>
        <Route path="/seller/:type" element={<ProductUploadPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
