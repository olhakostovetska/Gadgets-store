import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCube } from 'swiper/modules';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import banner1Big from '../../../assets/img/banners/banner1-big.png';
import banner1Small from '../../../assets/img/banners/banner1-small.png';
import banner2Big from '../../../assets/img/banners/banner2-big.png';
import banner2Small from '../../../assets/img/banners/banner2-small.webp';
import banner3Big from '../../../assets/img/banners/banner3-big.png';
import banner3Small from '../../../assets/img/banners/banner3-small.webp';
import styles from './Banner.module.scss';

const banners = [
  {
    linkTo: 'phones/apple-iphone-14-pro-128gb-spaceblack',
    imageBig: banner1Big,
    imageSmall: banner1Small,
  },
  {
    linkTo: 'tablets',
    imageBig: banner2Big,
    imageSmall: banner2Small,
  },
  {
    linkTo: 'accessories',
    imageBig: banner3Big,
    imageSmall: banner3Small,
  },
];

export const Banner: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 640);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.slaider}>
      <h2 className={styles.slaider_title}>Welcome to Nice Gadgets store!</h2>

      <Swiper
        effect="cube"
        navigation={{ nextEl: '.bannerNext', prevEl: '.bannerPrev' }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, EffectCube, Autoplay]}
        loop
        autoplay={{ delay: 12000, disableOnInteraction: false }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div>
              <button className={`${styles.button_prev} bannerPrev`}></button>
              <button className={`${styles.button_next} bannerNext`}></button>

              <img
                src={isSmallScreen ? banner.imageSmall : banner.imageBig}
                alt={`Banner ${index + 1}`}
                className={styles.slaider_banner}
              />

              <Link to={banner.linkTo} className={styles.slaider_button}>
                Order now
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
