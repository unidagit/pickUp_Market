import { ProviderProps } from "../../common/types";
import Footer from "./default/Footer";
import NavBar from "./default/NavBar";
import * as S from "./style";

function DefaultLayout({ children }: ProviderProps) {
  return (
    <>
      <NavBar />
      <S.ContentWrapper>{children}</S.ContentWrapper>
      <Footer />
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
