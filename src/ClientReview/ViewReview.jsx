import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const ViewReview = () => {
  const [reviewer, setReviewer] = useState([]);

  useEffect(() => {
    fetch(`https://toy-store-server-delta.vercel.app/allToysReview`)
      .then((res) => res.json())
      .then((data) => {
        setReviewer(data);
      });
  }, []);

  return (
    <div className="py-16 pb-5">
      <h2 className="text-center text-2xl lg:text-3xl font-bold py-4">
        Our Total {reviewer.length} numbers of <br />
        <span className="text-blue-400 py-2"> Client Review</span>
      </h2>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-96"
      >
        {reviewer.map((review) => (
        <SwiperSlide className="flex items-center justify-center rounded-[18px]" key={review._id}>
            <ReviewCard  review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ViewReview;
