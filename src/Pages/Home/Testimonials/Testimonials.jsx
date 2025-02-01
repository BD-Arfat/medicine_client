import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    // রিভিউ ডাটা লোড
    useEffect(() => {
        fetch("/reviews.json") // Ensure your JSON file is in the public folder
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div className="max-w-5xl mx-auto my-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{review.name}</h3>
                                    <p className="text-sm text-gray-500">{review.location}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-3">"{review.feedback}"</p>

                            {/* ⭐⭐⭐⭐⭐ রেটিং সিস্টেম */}
                            <div className="flex">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <span
                                        key={index}
                                        className={`text-yellow-400 text-xl ${
                                            index < review.rating ? "opacity-100" : "opacity-30"
                                        }`}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
