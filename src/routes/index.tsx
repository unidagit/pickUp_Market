import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "../pages/JoinPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";

export default function IRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/products/:id" element={<ProductDetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
