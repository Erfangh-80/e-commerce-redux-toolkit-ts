import { FC } from "react";
// images
import slide1 from "../../assets/images/slider-img-1.png";
import slide2 from "../../assets/images/slider-img-2.png";
import slide3 from "../../assets/images/slider-img-3.png";
// styles
import styles from "./Banner.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const Banner: FC = (): JSX.Element => {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide className={styles.swiperSlide}>
        <img src={slide1} alt="banner 1" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src={slide2} alt="banner 2" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src={slide3} alt="banner 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;

{
  /* <img src={slide1} alt="slide 1" />
<img src={slide2} alt="slide 1" />
<img src={slide3} alt="slide 1" /> */
}
