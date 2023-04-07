import * as S from "./style";

export interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  marginBottom?: string;
  color?: string;
}

function Label({
  htmlFor,
  children,
  width,
  fontSize,
  fontWeight,
  marginBottom,
  color,
}: LabelProps) {
  return (
    <S.Label
      htmlFor={htmlFor}
      width={width}
      fontSize={fontSize ? fontSize : "16px"}
      fontWeight={fontWeight}
      marginBottom={marginBottom ? marginBottom : "10px"}
      color={color ? color : "#767676"}
    >
      {children}
    </S.Label>
  );
}

export default Label;
