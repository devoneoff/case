import React from "react";
import './ReviewCard.css';

const ReviewCard = ({ review }) => {

    return (
        <div className="review-card-container">
            <div className="review-card-title">
                <div className="review-card-title-image">
                    <img src={ review.photo } alt="" />
                </div>
                <div className="review-card-title-name-prof">
                    <p>{ review.name }</p>
                    <p>{ review.profession }</p>
                </div>
            </div>

            <div className="review-card-message">{ review.message }</div>
            <div className="review-card-stars">{ review.stars }</div>
        </div>
    );
};

export default ReviewCard;