import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import Category from "./Category";

const Categorys = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="max-w-7xl w-11/12 mx-auto mt-14 md:mt-28">
      <h1 className="text-3xl font-bold mb-4">Product Categories</h1>

      <Swiper
        navigation={true}
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category._id}>
            <div className="p-4 rounded-lg">
              <Category item={category} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categorys;
