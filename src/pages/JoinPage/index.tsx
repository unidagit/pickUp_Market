import * as S from './style';
import { useForm } from 'react-hook-form';
import { IFormValue } from '../../common/types';
import useValidCompanyNumQuery from '../../hooks/mutations/useVaildCompanyNumQuery';
import { useSelectTab } from '../../hooks/useSelectTab';
import SellerJoinForm from '../../components/contents/sellerJoinForm';
import BuyerJoinForm from '../../components/contents/buyerJoinForm';
import { useJoinSellerQuery } from '../../hooks/mutations/useJoinSellerQuery';
import useValidUsernameQuery from '../../hooks/mutations/useValidUsernameQuery';
import { useJoinBuyerQuery } from '../../hooks/mutations/useJoinBuyerQuery';
import { CenterLayout } from '../_layouts';

function JoinPage() {
  const { loginType, handleSellerButton, handleBuyerButton } = useSelectTab();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid, errors },
  } = useForm<IFormValue>({ mode: 'onChange' });

  //SELLER 유저네임 중복 체크
  const { vaildUsername, errorMessage, successMessage, isValidUsername } =
    useValidUsernameQuery();

  //SELLER 사업자번호 중복 체크
  const {
    validCompanyNum,
    errorCompanyMessage,
    successCompanyMessage,
    isValidCompanyNum,
  } = useValidCompanyNumQuery();

  //SELLER 폼제출 mutation
  const { postSellerJoin, errorSellerJoinMessage } = useJoinSellerQuery();

  //SELLER 폼제출
  const sellerOnSubmit = async (joinData: IFormValue) => {
    if (!isValidUsername) {
      alert('아이디 중복체크 해주세요.');
    } else if (!isValidCompanyNum) {
      alert('사업자등록번호 인증 해주세요.');
      return;
    }
    postSellerJoin(joinData);
  };

  //SELLER 아이디 중복검사
  const handleUsernameCheck = () => {
    const username = getValues('username');
    if (username) {
      vaildUsername(username);
    }
  };

  //SELLER 사업자등록번호 인증 검사
  const handleCompanyNumCheck = () => {
    const companyNum = getValues('company_registration_number');
    if (companyNum) {
      validCompanyNum(companyNum);
    }
  };

  //SELLER 폼제출 mutation
  const { postBuyerJoin, errorBuyerJoinMessage } = useJoinBuyerQuery();

  //BUYER 폼제출
  const buyerOnSubmit = async (joinData: IFormValue) => {
    if (!isValidUsername) {
      alert('아이디 중복체크 해주세요.');
      return;
    }
    postBuyerJoin(joinData);
  };

  const sellerJoinFormProps = {
    register,
    isValid,
    handleSubmit,
    getValues,
    errors,
    errorMessage,
    successMessage,
    errorCompanyMessage,
    successCompanyMessage,
    sellerOnSubmit,
    handleUsernameCheck,
    handleCompanyNumCheck,
    errorSellerJoinMessage,
  };

  const buyerJoinFormProps = {
    register,
    isValid,
    handleSubmit,
    getValues,
    errors,
    errorMessage,
    successMessage,
    errorCompanyMessage,
    successCompanyMessage,
    buyerOnSubmit,
    handleUsernameCheck,
    handleCompanyNumCheck,
    errorSellerJoinMessage,
    errorBuyerJoinMessage,
  };

  return (
    <CenterLayout>
      <S.Wrapper>
        <S.TabBox>
          <S.SelectTab onClick={handleBuyerButton} loginType={loginType}>
            구매회원 가입
          </S.SelectTab>
          <S.SelectTab onClick={handleSellerButton} loginType={loginType}>
            판매회원 가입
          </S.SelectTab>
        </S.TabBox>

        {loginType === 'BUYER' ? (
          <BuyerJoinForm {...buyerJoinFormProps} />
        ) : (
          <SellerJoinForm {...sellerJoinFormProps} />
        )}
      </S.Wrapper>
    </CenterLayout>
  );
}

export default JoinPage;
