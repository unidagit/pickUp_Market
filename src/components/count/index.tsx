import { ICountProps } from "../../common/types";
import * as S from "./style";

function Count({ count, setCount, userType, stock }: ICountProps) {
  const handleMinus = () => {
    if (userType === "SELLER") {
      alert("판매자는 구매할 수 없습니다.");
      return;
    }

    if (count > 1) {
      setCount(count - 1);
      return;
    }
  };

  const handleAdd = () => {
    //seller 금지
    if (userType === "SELLER") {
      alert("판매자는 구매할 수 없습니다.");
      return;
    }

    if (stock > count && stock > 0) {
      setCount(count + 1);
      return;
    } else if (stock === 0) {
      alert("현재 품절입니다");
    }
  };

  return (
    <S.CountBox>
      <S.MinusButton onClick={handleMinus}>-</S.MinusButton>
      <S.Num>{count}</S.Num>
      <S.AddButton onClick={handleAdd}>+</S.AddButton>
    </S.CountBox>
  );
}

export default Count;
