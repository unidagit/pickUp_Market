import React from "react";
import * as S from "./style";
import Label from "../label";

function Checkbox({
  text,
  checked,
  onChange,
  value,
}: {
  text: string;
  checked?: any;
  onChange?: any;
  value?: string;
}) {
  return (
    <S.Wrapper>
      <Label marginBottom="0px" htmlFor={text} />
      <S.Input
        type="checkbox"
        id={text}
        name={text}
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
}

export default Checkbox;
