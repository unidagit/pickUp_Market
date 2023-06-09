import { IFormValue } from '../../common/types';
import { FieldValues } from 'react-hook-form';
import { authInstance, instance } from '../../util/instance';

export const apiPostLogin = async (loginData: {
  data: FieldValues;
  loginType: string;
}) => {
  const { data, loginType } = loginData;
  const config = {
    username: data.username,
    password: data.password,
    login_type: loginType,
  };
  const res = await instance.post(`/accounts/login/`, config);
  return res.data;
};

export const apiGetProducts = async (pageParam: any) => {
  const { data } = await instance.get(`/products?page=${pageParam}`);
  return data;
};

export const apiGetProductDetail = async (productId: number) => {
  const { data } = await instance.get(`/products/${productId}/`);
  return data;
};

export const apiGetSellerProducts = async () => {
  const getToken = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `JWT ${getToken}`,
    },
  };
  const { data } = await authInstance.get(`/seller/`, config);
  return data.results;
};

export const apiPostSellerProducts = async (formData: FieldValues) => {
  const getToken = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${getToken}`,
    },
  };
  const { data } = await authInstance.post(`/products/`, formData, config);

  return data;
};

export const apiDeleteSellerProduct = async (product_id: number) => {
  const getToken = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `JWT ${getToken}`,
    },
  };
  const { data } = await authInstance.delete(
    `/products/${product_id}/`,
    config
  );
  return data;
};

export const apiEditSellerProduct = async (data: {
  formData: FieldValues;
  product_id: number;
}) => {
  const getToken = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${getToken}`,
    },
  };
  const res = await authInstance.patch(
    `/products/${data.product_id}/`,
    data.formData,
    config
  );
  return res.data;
};

export const apiPostValidUsername = async (username: string) => {
  const config = {
    username,
  };
  const { data } = await instance.post(
    `/accounts/signup/valid/username/`,
    config
  );
  return data;
};

export const apiPostValidCompanyNum = async (companyNum: string) => {
  const config = {
    company_registration_number: `${companyNum}`,
  };
  const { data } = await instance.post(
    `/accounts/signup/valid/company_registration_number/`,
    config
  );
  return data;
};

export const apiSellerPostJoin = async (joinData: IFormValue) => {
  const { data } = await instance.post(`/accounts/signup_seller/`, joinData);
  return data;
};

export const apiBuyerPostJoin = async (joinData: IFormValue) => {
  const { data } = await instance.post(`/accounts/signup/`, joinData);
  return data;
};

export const apiPostCart = async (data: {
  product_id: number | undefined;
  quantity: number;
  check: boolean;
}) => {
  const getToken = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `JWT ${getToken}`,
    },
  };
  const res = await authInstance.post(`/cart/`, data, config);
  return res.data;
};

export const apiGetCartList = async () => {
  const getToken = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `JWT ${getToken}`,
    },
  };
  const { data } = await authInstance.get(`/cart/`, config);
  return data;
};

export const apiGetCartInfo = async (cart_item_id: number) => {
  const getToken = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `JWT ${getToken}`,
    },
  };
  const { data } = await authInstance.get(`/cart/${cart_item_id}/`, config);
  return data;
};

export const apiDeleteBuyerCart = async () => {
  const getToken = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `JWT ${getToken}`,
    },
  };
  const { data } = await authInstance.delete(`/cart/`, config);
  return data;
};

export const apiDeleteBuyerSelectCart = async (cart_item_id: number) => {
  const getToken = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `JWT ${getToken}`,
    },
  };
  const { data } = await authInstance.delete(`/cart/${cart_item_id}/`, config);
  return data;
};

export const apiEditBuyerCartCount = async (cart_item_id: number) => {
  const getToken = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `JWT ${getToken}`,
    },
  };
  const { data } = await authInstance.put(`/cart/${cart_item_id}/`, config);
  return data;
};

export const apiCartOrderPost = async (OrderData: any) => {
  const getToken = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `JWT ${getToken}`,
    },
  };
  const { data } = await authInstance.post(`/order/`, OrderData, config);
  return data;
};

export const apiGetOrderSuccessList = async () => {
  const getToken = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `JWT ${getToken}`,
    },
  };
  const { data } = await authInstance.get(`/order/`, config);
  return data;
};
