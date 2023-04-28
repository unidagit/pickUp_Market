import * as S from './style';

function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterInfo>
        <S.FooterList>
          <S.Text>픽업마켓 소개</S.Text>
          <S.Text>이용약관</S.Text>
          <S.Text>개인정보처리방침</S.Text>
          <S.Text>전자금융거래약관</S.Text>
          <S.Text>청소년보호정책</S.Text>
        </S.FooterList>
        <S.CompanyInfo>
          <S.Text>(주)pickUp Market</S.Text>
          <S.Text>서울특별시 강남구 125-56</S.Text>
          <S.Text>사업자 번호: 000-0000-0000</S.Text>
          <S.Text>대표: 픽업</S.Text>
        </S.CompanyInfo>
      </S.FooterInfo>
    </S.FooterWrapper>
  );
}

export default Footer;
