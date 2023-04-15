import React from "react";
import * as S from "./style";
import { IPrice } from "../../common/types";

function ErrorText({ children }: { children: React.ReactNode }) {
  return <S.ErrorText>{children}</S.ErrorText>;
}

function SuccessText({ children }: { children: React.ReactNode }) {
  return <S.SuccessText>{children}</S.SuccessText>;
}

function PriceCommaText({
  fontSize,
  fontWeight,
  fontColor,
  price,
  unitColor,
  unitSize,
  unitHeight,
  unitWeight,
}: IPrice) {
  const priceComma = (price: number) => price.toLocaleString();
  return (
    <S.PriceBox>
      <S.PriceText
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontColor={fontColor}
      >
        {price && priceComma(price)}
      </S.PriceText>
      <S.Unit
        unitColor={unitColor}
        unitSize={unitSize}
        unitHeight={unitHeight}
        unitWeight={unitWeight ? unitWeight : "400"}
      >
        원
      </S.Unit>
    </S.PriceBox>
  );
}

export { ErrorText, PriceCommaText, SuccessText };
