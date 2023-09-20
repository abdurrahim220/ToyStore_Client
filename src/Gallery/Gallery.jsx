import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./styles.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch("https://toy-store-server-delta.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setGallery(data);
      });
  }, []);
  return (
    <div className="py-16 lg:px-5 px-3">
      <h2 className="text-center font-sans text-2xl lg:text-5xl font-extrabold mb-3 mt-1 text-pink-600">
        Toys Gallery
      </h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {gallery.map((item ,index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item.image}  alt="" srcset="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Gallery;
