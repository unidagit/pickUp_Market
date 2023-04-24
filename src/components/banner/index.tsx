import Slider from "react-slick";
import * as S from "./style";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 자동 슬라이딩 활성화
    autoplaySpeed: 3000, // 자동 슬라이딩 간격 (2초)
  };

  return (
    <S.SliderBox>
      <Slider {...settings}>
        <S.Img src={banner1} alt="banner" />
        <S.Img src={banner2} alt="banner" />
      </Slider>
    </S.SliderBox>
  );
};

export default Banner;
