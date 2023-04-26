import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProductDetailPage from '../pages/Product/ProductDetailPage';
import ProductSellerPage from '../pages/Product/ProductSellerPage';
import ProductUploadPage from '../pages/Product/ProductUploadPage';
import JoinPage from '../pages/JoinPage';
import CartPage from '../pages/CartPage';
import OrderPage from '../pages/OrderPage';
import { PrivateRoute } from './privateRoute';
import ErrorPage from '../pages/ErrorPage';

export default function IRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/join" element={<JoinPage />}></Route>
        <Route path="/products/:id" element={<ProductDetailPage />}></Route>
        <Route
          path="/seller"
          element={
            <PrivateRoute>
              <ProductSellerPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/seller/:type"
          element={
            <PrivateRoute>
              <ProductUploadPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/cart/"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/order/"
          element={
            <PrivateRoute>
              <OrderPage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
