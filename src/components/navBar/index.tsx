import { useNavigate } from "react-router-dom";
import * as S from "./style";
import user from "../../assets/user.png";
import shoppingBag from "../../assets/shoppingBag.png";
import shoppingCart from "../../assets/shoppingCart.png";
import Button from "../buttons";
import Logo from "../logo";

function NavBar() {
  // const navigate = useNavigate();

  return (
    <>
      <S.Wrapper>
        <Logo />
        <S.SellerTitle>판매자 센터</S.SellerTitle>
      </S.Wrapper>
      <S.Line></S.Line>
    </>
  );
}

function BuyerNavBar() {
  // const navigate = useNavigate();

  return (
    <>
      <S.StickyWrapper>
        <Logo />

        <S.IconBox>
          <S.MyIconBox>
            <S.MyIcon src={shoppingCart} alt="장바구니" />
            <S.MyIconText>장바구니</S.MyIconText>
          </S.MyIconBox>

          <S.MyIconBox>
            <S.MyIcon src={user} alt="마이페이지" />
            <S.MyIconText>마이페이지</S.MyIconText>
          </S.MyIconBox>
        </S.IconBox>
      </S.StickyWrapper>
      <S.Line></S.Line>
    </>
  );
}

function SellerNavBar() {
  const navigate = useNavigate();
  const handleSeller = () => {
    navigate(`/products/seller`);
  };
  return (
    <>
      <S.StickyWrapper>
        <Logo />

        <S.IconBox>
          <S.MyIconBox>
            <S.MyIcon src={user} alt="user 이미지" />
            <S.MyIconText>마이페이지</S.MyIconText>
          </S.MyIconBox>

          <Button
            fontSize="18px"
            fontWeight="500"
            width="168px"
            height="54px"
            fontColor="#FFFFFF"
            backgroundColor="#21BF48"
            onClick={handleSeller}
          >
            <S.ShopBagIcon src={shoppingBag} />
            판매자 센터
          </Button>
        </S.IconBox>
      </S.StickyWrapper>
      <S.Line></S.Line>
    </>
  );
}

export { NavBar, SellerNavBar, BuyerNavBar };
