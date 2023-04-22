import { ProviderProps } from "../../common/types";
import { BuyerNavBar, SellerNavBar } from "../../components/navBar";
import * as S from "./style";

function DefaultLayout({ children }: ProviderProps) {
  const userType = localStorage.getItem("user_type");

  return (
    <>
      {userType === "SELLER" ? (
        <SellerNavBar userType={userType} />
      ) : (
        <BuyerNavBar userType={userType} />
      )}

      <S.ContentWrapper>{children}</S.ContentWrapper>
    </>
  );
}

function CenterLayout({ children }: ProviderProps) {
  return (
    <>
      <S.CenterWrapper>{children}</S.CenterWrapper>
    </>
  );
}

export { DefaultLayout, CenterLayout };
