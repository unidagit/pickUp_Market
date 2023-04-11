import { useNavigate } from "react-router-dom";
import * as S from "./style";
import user from "../../assets/user.png";
import shoppingBag from "../../assets/shoppingBag.png";
import shoppingCart from "../../assets/shoppingCart.png";
import Button from "../atoms/buttons";
import Logo from "../logo";
import { useState, useRef, useEffect } from "react";
import Dropdown from "../dropDown";

function NavBar() {
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
    navigate(`/seller`);
  };

  //  드롭다운
  const modalRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleMyBoxClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    const clickModalOutside = (e: any) => {
      const isInside = modalRef.current?.contains(e.target);
      if (open && !isInside) {
        setOpen(!open);
      }
    };

    document.addEventListener("mousedown", clickModalOutside);

    //클린업
    return () => {
      document.removeEventListener("mousedown", clickModalOutside);
    };
  }, [open]);

  return (
    <>
      <S.StickyWrapper>
        <Logo />

        <S.IconBox>
          <S.MyIconBox ref={modalRef} onClick={handleMyBoxClick}>
            <S.MyIcon src={user} alt="user 이미지" />
            <S.MyIconText>마이페이지</S.MyIconText>
            <S.DropBox>{open && <Dropdown />}</S.DropBox>
          </S.MyIconBox>

          <Button
            fontSize="18px"
            fontWeight="500"
            width="168px"
            height="54px"
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
