"use client";
import React from "react";
import styles from "@/styles/shopAddressContainer.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";

function FeedBackSlider() {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
    >
      <SwiperSlide>
        <div className="border p-3 rounded">
            <div className={`${styles.feedbackContent} d-flex flex-column`}>
                <div className="d-flex align-items-center">
                        <span className={styles.profile_photo}>M</span> <span className="m-0 ms-2 text-primary">Mohit Shah</span>
                </div>
                <p className="mt-3 m-0" style={{fontSize:"14px"}}>
                Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate. 
                </p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border p-3 rounded">
            <div className={`${styles.feedbackContent} d-flex flex-column`}>
                <div className="d-flex align-items-center">
                        <span className={styles.profile_photo}>M</span> <span className="m-0 ms-2 text-primary">Mohit Shah</span>
                </div>
                <p className="mt-3 m-0" style={{fontSize:"14px"}}>
                Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate. 
                </p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border p-3 rounded">
            <div className={`${styles.feedbackContent} d-flex flex-column`}>
                <div className="d-flex align-items-center">
                        <span className={styles.profile_photo}>M</span> <span className="m-0 ms-2 text-primary">Mohit Shah</span>
                </div>
                <p className="mt-3 m-0" style={{fontSize:"14px"}}>
                Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate. 
                </p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border p-3 rounded">
            <div className={`${styles.feedbackContent} d-flex flex-column`}>
                <div className="d-flex align-items-center">
                        <span className={styles.profile_photo}>M</span> <span className="m-0 ms-2 text-primary">Mohit Shah</span>
                </div>
                <p className="mt-3 m-0" style={{fontSize:"14px"}}>
                Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate. 
                </p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border p-3 rounded">
            <div className={`${styles.feedbackContent} d-flex flex-column`}>
                <div className="d-flex align-items-center">
                        <span className={styles.profile_photo}>M</span> <span className="m-0 ms-2 text-primary">Mohit Shah</span>
                </div>
                <p className="mt-3 m-0" style={{fontSize:"14px"}}>
                Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate. 
                </p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border p-3 rounded">
            <div className={`${styles.feedbackContent} d-flex flex-column`}>
                <div className="d-flex align-items-center">
                        <span className={styles.profile_photo}>M</span> <span className="m-0 ms-2 text-primary">Mohit Shah</span>
                </div>
                <p className="mt-3 m-0" style={{fontSize:"14px"}}>
                Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate. 
                </p>
            </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
}

export default FeedBackSlider;
