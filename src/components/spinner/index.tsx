import * as S from "./style";
import { FadeLoader } from "react-spinners";

function Spinner() {
  return (
    <S.Wrapper>
      <FadeLoader color="#24242444" width={5} height={15} />
    </S.Wrapper>
  );
}

export default Spinner;
