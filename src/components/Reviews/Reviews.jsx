import React from "react";
import './Reviews.css';
import { REVIEWS } from "../../utils/data";
import ReviewCard from "./ReviewCard/ReviewCard";
import 'swiper/css';

const Reviews = () => {
    return (
        <div className="reviews-container">
            <h4>What people are saying about <span>DevoneOff</span></h4>
            <div className="reviews-content">

                <swiper-container
                    slides-per-view="4"
                    space-between="300"
                    speed="500"
                    loop="true"
                    breakpoints={
                        JSON.stringify({
                            250: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            450: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            600:{
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            900:{
                                slidesPerView: 3,
                                spaceBetween: 150,

                            },
                            1300:{
                                slidesPerView: 4,
                                spaceBetween: 250,
                            },
                        })
                    }
                >
                    {REVIEWS.map(( item ) => (
                        <swiper-slide>
                            <ReviewCard key={ item.name } review={ item } />
                        </swiper-slide>
                    ))}
                </swiper-container>

            </div>
        </div>
    );
};

export default Reviews;