import React from 'react';

const ReviewItem = ({ review }) => {
    const { img, name, comment, rating } = review;
    return (
        <div>
            <img src={img} alt="" />
            <h4>Name:{name}</h4>
            <p>Feedback:{comment}</p>
            <p>Rating:{rating}</p>
        </div>
    );
};

export default ReviewItem;