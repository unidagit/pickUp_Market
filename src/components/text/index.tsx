import React from "react";
import * as S from "./style";

export default function ErrorText({ children }: { children: React.ReactNode }) {
  return <S.ErrorText>{children}</S.ErrorText>;
}
