import * as S from "./style";

function Dropdown({
  handleLogout,
  handleLogin,
  userType,
}: {
  handleLogout?: () => void;
  handleLogin?: () => void;
  userType?: string | null;
}) {
  return (
    <S.Wrapper>
      <S.Triangle></S.Triangle>
      {userType ? (
        <>
          <S.MyText>주문목록 페이지</S.MyText>
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
