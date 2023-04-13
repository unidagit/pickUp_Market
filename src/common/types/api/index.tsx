export interface IProducts {
  created_at?: string;
  image?: string;
  price: number;
  product_id?: number;
  product_info: string;
  product_name: string;
  seller?: number;
  shipping_fee: number;
  shipping_method?: string;
  stock: number;
  store_name?: string;
  updated_at?: string;
}

export interface IProductBox {
  image: string;
  price: number;
  product_id: number;
  product_name: string;
  store_name: string;
  stock: number;
  shipping_fee: number;
  product_info: string;
  shipping_method: string;
  handleDelete: (id: number) => void;
  handleModify: any;
}

export interface IOnsubmit {
  image: string;
  product_name: string;
  price: number;
  shipping_fee: number;
  product_info: string;
  stock: number;
}

export interface IProductResult {
  created_at: string;
  image: string;
  price: number;
  product_id: number;
  product_info: string;
  product_name: string;
  seller: number;
  shipping_fee: number;
  shipping_method: string;
  stock: number;
  store_name: string;
  updated_at: string;
}

export interface IPage {
  count: number;
  next: string | null;
  previous: string | null;
  results: IProductResult[];
}

export interface IPageParam {
  pages: IPage[];
}
