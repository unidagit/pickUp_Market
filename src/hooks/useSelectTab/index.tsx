import { useState } from "react";

export const useSelectTab = () => {
  const [loginType, setLoginType] = useState("BUYER");

  const handleSellerButton = () => {
    setLoginType("SELLER");
  };

  const handleBuyerButton = () => {
    setLoginType("BUYER");
  };

  return {
    loginType,
    handleSellerButton,
    handleBuyerButton,
  };
};
