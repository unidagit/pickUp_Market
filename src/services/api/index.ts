import axios from "axios";
import { BASE_URL } from "../../constants";
import { IFormValue } from "../../common/types";

const instance = axios.create({
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
