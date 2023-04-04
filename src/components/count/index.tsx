import * as S from "./style";

function Count({ count, setCount, userType }: any) {
  // const userType = localStorage.getItem("user_type");

  const handleMinus = () => {
    if (userType === "SELLER") {
      alert("판매자는 구매할 수 없습니다.");
      return;
    }
    setCount(count - 1);
  };

  const handleAdd = () => {
    if (userType === "SELLER") {
      alert("판매자는 구매할 수 없습니다.");
      return;
    }
    setCount(count + 1);
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
