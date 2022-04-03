import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ review }) => {
    const { img, name, comment, rating } = review;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Feedback: {comment}</p>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default ReviewItem;