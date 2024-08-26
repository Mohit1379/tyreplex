"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function ShopImageSlider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      // centeredSlides={true} 
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper w-100 mt-md-0 m-2"
      breakpoints={{
        768: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 1.8,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 2.4,
          spaceBetween: 15,
        },
      }}
    >
      <SwiperSlide className="d-flex justify-content-center">
        <Image src="/shopImage.jpg" width={290} height={162} alt="shopImage"/>
      </SwiperSlide >
      <SwiperSlide className="d-flex justify-content-center">
        <Image src="/shopImage.jpg" width={290} height={162} alt="shopImage"/>
      </SwiperSlide>
      <SwiperSlide className="d-flex justify-content-center">
        <Image src="/shopImage.jpg" width={290} height={162} alt="shopImage"/>
      </SwiperSlide>
      <SwiperSlide className="d-flex justify-content-center">
        <Image src="/shopImage.jpg" width={290} height={162} alt="shopImage"/>
      </SwiperSlide >
      <SwiperSlide className="d-flex justify-content-center">
        <Image src="/shopImage.jpg" width={290} height={162} alt="shopImage"/>
      </SwiperSlide>
      <SwiperSlide className="d-flex justify-content-center">
        <Image src="/shopImage.jpg" width={290} height={162} alt="shopImage"/>
      </SwiperSlide>
    </Swiper>
  );
}

export default ShopImageSlider;
