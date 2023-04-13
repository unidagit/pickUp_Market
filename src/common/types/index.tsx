export type ProviderProps = {
  children: React.ReactNode;
};

export interface IFormValue {
  username?: string;
  password?: string;
  password2?: string;
  phone_number?: string;
  accountname?: string;
  name?: string;
  store_name?: string;
  introduce?: string;
  filename?: string;
  company_registration_number?: string;
}

export interface IPrice {
  price?: number;
  fontSize?: string;
  fontWeight?: string;
  fontColor?: string;
  unitColor?: string;
  unitSize?: string;
  unitHeight?: string;
}

export interface IProductInputProps {
  unit?: string;
  type?: string;
  id?: string;
  register?: any;
  width?: string;
  min?: string;
  onChange?: any;
}

export interface IDefault {
  image: any;
  price: number | undefined;
  product_id: number | undefined;
  product_name: string | undefined;
  stock: number | undefined;
  shipping_fee: number | undefined;
  product_info: string | undefined;
  shipping_method: string | undefined;
}

export interface SelectTabProps {
  loginType: string;
}

export interface ICountProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  userType: string | null;
  stock: number;
}
