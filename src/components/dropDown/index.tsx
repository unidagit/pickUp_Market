import * as S from "./style";

function Dropdown({
  handleLogout,
  handleLogin,
}: {
  handleLogout?: () => void;
  handleLogin?: () => void;
}) {
  return (
    <S.Wrapper>
      <S.Triangle></S.Triangle>
      <S.MyText>마이페이지</S.MyText>
      {handleLogout && (
        <S.MyText onClick={() => handleLogout()}>로그아웃</S.MyText>
      )}
      {handleLogin && <S.MyText onClick={() => handleLogin()}>로그인</S.MyText>}
    </S.Wrapper>
  );
}

export default Dropdown;
