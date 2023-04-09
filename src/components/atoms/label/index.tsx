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
      fontSize={fontSize}
      fontWeight={fontWeight}
      marginBottom={marginBottom}
      color={color}
    >
      {children}
    </S.Label>
  );
}

Label.defaultProps = {
  width: "100%",
  fontSize: "16px",
  fontWeight: "400",
  marginBottom: "10px",
  color: "#767676",
};

export default Label;
