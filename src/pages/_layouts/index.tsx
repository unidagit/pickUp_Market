import { ProviderProps } from "../../common/types";
import NavBar from "../../components/navBar";
import * as S from "./style";

function DefaultLayout({ children }: ProviderProps) {
  return (
    <>
      <NavBar />
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
