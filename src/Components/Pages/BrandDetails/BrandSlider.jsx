// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BrandSlider= () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.postimg.cc/QtBKfczP/m1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/D0nFST1g/realme1.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/FRGCx52G/realme2.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/VvpR7Y49/realme3.webp" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
export default BrandSlider;