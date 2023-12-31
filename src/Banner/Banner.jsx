import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  const images = [
    {
      id: 10,
      url: "https://i.ibb.co/ZLqrWJs/10.png",
    },
    {
      id: 11,
      url: "https://i.ibb.co/Q9XgCjZ/11.jpg",
    },
    {
      id: 12,
      url: "https://i.ibb.co/JrVYsxX/12.jpg",
    },
    {
      id: 13,
      url: "https://i.ibb.co/1rJzVWJ/13.jpg",
    },
  ];

  return (
    
      <Carousel className="">
        {images.map((image, index) => {
          return (
            <div key={index} className=" lg:h-[650px]">
              <img src={image.url}  alt="" />
            </div>
          );
        })}
      </Carousel>
   
  );
};

export default Banner;
