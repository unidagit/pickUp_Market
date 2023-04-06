import * as S from "./style";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/`);
  return <S.Logo src={logo} alt="로고" onClick={handleClick} />;
}
