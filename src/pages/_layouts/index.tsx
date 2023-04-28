import { useNavigate } from 'react-router-dom';
import { ProviderProps } from '../../common/types';
import { BuyerNavBar, SellerNavBar } from '../../components/navBar';
import * as S from './style';

function DefaultLayout({ children }: ProviderProps) {
  const userType = localStorage.getItem('user_type');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/login`);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_type');
    navigate(`/login`);
  };

  const handleCartClick = () => {
    navigate(`/cart`);
    if (!userType) {
      alert('로그인이 필요한 서비스입니다.');
      navigate(`/login`);
    }
  };

  const handleOrderPage = () => {
    navigate(`/orderList`);
  };

  return (
    <>
      {userType === 'SELLER' ? (
        <SellerNavBar userType={userType} />
      ) : (
        <BuyerNavBar
          userType={userType}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          handleCartClick={handleCartClick}
          handleOrderPage={handleOrderPage}
        />
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
