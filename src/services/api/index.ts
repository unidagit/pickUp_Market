import axios from "axios";
import { BASE_URL } from "../../constants";
import { IFormValue } from "../../common/types";

const getToken = localStorage.getItem("token");

const instance = axios.create({
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `JWT ${getToken}`,
  },
  baseURL: `${BASE_URL}`,
});

export const apiPostLogin = async (data: IFormValue) => {
  const { username, password } = data;
  const config = {
    username,
    password,
    login_type: "SELLER",
  };
  const res = await instance.post(`/accounts/login/`, config);
  return res.data;
};

export const apiGetProducts = async () => {
  const { data } = await instance.get(`/products/`);
  return data.results;
};

export const apiGetProductDetail = async (productId: string) => {
  const { data } = await instance.get(`/products/${productId}/`);
  return data;
};

export const apiGetSellerProducts = async () => {
  const getToken = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `JWT ${getToken}`,
    },
  };
  const { data } = await instance.get(`/seller/`, config);
  return data.results;
};

export const apiPostSellerProducts = async (newProduct: any) => {
  const { data } = await instance.post(`/products/`, newProduct);
  return data;
};

export const apiDeleteSellerProduct = async (product_id: number) => {
  const { data } = await instance.delete(`/products/${product_id}/`);
  return data;
};
