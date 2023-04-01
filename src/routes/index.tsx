import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "../pages/JoinPage";
import Home from "../template/Home";
import LoginPage from "../pages/LoginPage";

export default function IRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/join" element={<Join />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
