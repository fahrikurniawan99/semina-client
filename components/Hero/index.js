import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-headline">
          Expand Your <span className="text-gradient-blue">Knowledge</span>{" "}
          <br className="d-none d-lg-block" />
          by <span className="text-gradient-pink">Joining</span> Our Greatest
          Events
        </div>
        <p className="hero-paragraph">
          Kami menyediakan berbagai acara terbaik untuk membantu{" "}
          <br className="d-none d-lg-block" />
          anda dalam meningkatkan skills di bidang teknologi
        </p>
        <a href="#grow-today" className="btn-green">
          Browse Now
        </a>
      </div>

      <div className="header-image">
        <Swiper
          slidesPerView={1}
          initialSlide={1}
          loop
          className="overflow-visible"
          style={{ width: "70%" }}
        >
          <SwiperSlide className="d-flex my-auto">
            {(props) => (
              <img
                src="/images/1.png"
                className={`object-fit-cover m-auto ${
                  props.isActive ? "w-100" : "w-75"
                }`}
              />
            )}
          </SwiperSlide>
          <SwiperSlide className="d-flex my-auto">
            {(props) => (
              <img
                src="/images/2.png"
                className={`object-fit-cover m-auto ${
                  props.isActive ? "w-100" : "w-75"
                }`}
              />
            )}
          </SwiperSlide>
          <SwiperSlide className="d-flex my-auto">
            {(props) => (
              <img
                src="/images/1.png"
                className={`object-fit-cover m-auto ${
                  props.isActive ? "w-100" : "w-75"
                }`}
              />
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
