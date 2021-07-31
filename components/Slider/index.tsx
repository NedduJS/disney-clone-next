import React from 'react';
import Image from 'next/image';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Slider.module.css';
import sliderImg1 from '@public/images/slider-img1.jpg';
import sliderImg2 from '@public/images/slider-img2.jpg';
import sliderImg3 from '@public/images/slider-img3.jpg';
import sliderImg4 from '@public/images/slider-img4.jpg';

SwiperCore.use([Pagination]);

const Slider = () => {
  return (
    <Swiper spaceBetween={0} slidesPerView={1} pagination>
      <SwiperSlide>
        <div className={styles.imageContainer}>
          <Image
            src={sliderImg1}
            layout='responsive'
            className={styles.image}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.imageContainer}>
          <Image
            src={sliderImg2}
            layout='responsive'
            className={styles.image}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.imageContainer}>
          <Image
            src={sliderImg3}
            layout='responsive'
            className={styles.image}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.imageContainer}>
          <Image
            src={sliderImg4}
            layout='responsive'
            className={styles.image}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
