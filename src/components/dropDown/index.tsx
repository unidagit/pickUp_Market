import * as S from './style';

function Dropdown({
  handleLogout,
  handleLogin,
  userType,
  handleOrderPage,
}: {
  handleLogout?: () => void;
  handleLogin?: () => void;
  userType?: string | null;
  handleOrderPage?: any;
}) {
  return (
    <S.Wrapper>
      <S.Triangle></S.Triangle>
      {userType === 'BUYER' && (
        <S.MyText onClick={() => handleOrderPage()}>주문목록 페이지</S.MyText>
      )}
      {userType ? (
        <>
          {handleLogout && (
            <S.MyText onClick={() => handleLogout()}>로그아웃</S.MyText>
          )}
        </>
      ) : (
        <>
          {handleLogin && (
            <S.MyText onClick={() => handleLogin()}>로그인</S.MyText>
          )}
        </>
      )}
    </S.Wrapper>
  );
}

export default Dropdown;
