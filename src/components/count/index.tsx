import { ICountProps } from "../../common/types";
import * as S from "./style";

function Count({
  count,
  // setCount,
  // userType,
  stock,
  handleMinus,
  handleAdd,
}: ICountProps) {
  return (
    <S.CountBox>
      <S.MinusButton onClick={() => handleMinus()}>-</S.MinusButton>
      <S.Num>{count}</S.Num>
      <S.AddButton onClick={() => handleAdd(stock)}>+</S.AddButton>
    </S.CountBox>
  );
}

export default Count;
