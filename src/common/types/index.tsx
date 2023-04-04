export type ProviderProps = {
  children: React.ReactNode;
};

export interface IFormValue {
  password?: string;
  username?: string;
  accountname?: string;
  introduce?: string;
  filename?: string;
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
