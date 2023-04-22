import { useNavigate } from "react-router-dom";
import * as S from "./style";
import user from "../../assets/user.png";
import shoppingBag from "../../assets/shoppingBag.png";
import shoppingCart from "../../assets/shoppingCart.png";
import Button from "../atoms/buttons";
import Logo from "../logo";
import Dropdown from "../dropDown";
import { useDropdown } from "../../hooks/useDropdown";
import { Link } from "react-router-dom";

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

function BuyerNavBar({ userType }: { userType: string | null }) {
  const navigate = useNavigate();
  const { modalRef, open, handleMyBoxClick } = useDropdown();

  const handleLogin = () => {
    navigate(`/login`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_type");
    navigate(`/login`);
  };

  return (
    <>
      <S.StickyWrapper>
        <Logo />

        <S.IconBox>
          <S.MyIconBox>
            <S.MyIcon src={shoppingCart} alt="장바구니" />
            <S.MyIconText>
              <Link to={`/cart`}>장바구니</Link>
            </S.MyIconText>
          </S.MyIconBox>

          <S.MyIconBox ref={modalRef} onClick={handleMyBoxClick}>
            <S.MyIcon src={user} alt="마이 페이지" />
            <S.MyIconText>마이 페이지</S.MyIconText>
            <S.DropBox>
              {open && (
                <Dropdown
                  userType={userType}
                  handleLogin={handleLogin}
                  handleLogout={handleLogout}
                />
              )}
            </S.DropBox>
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

  const { modalRef, open, handleMyBoxClick } = useDropdown();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_type");
    navigate(`/login`);
  };

  return (
    <>
      <S.StickyWrapper>
        <Logo />

        <S.IconBox>
          <S.MyIconBox ref={modalRef} onClick={handleMyBoxClick}>
            <S.MyIcon src={user} alt="user 이미지" />
            <S.MyIconText>마이페이지</S.MyIconText>
            <S.DropBox>
              {open && <Dropdown handleLogout={handleLogout} />}
            </S.DropBox>
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
