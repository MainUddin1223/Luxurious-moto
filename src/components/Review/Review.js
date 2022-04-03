import React from 'react';
import useReview from '../../Hooks/useReview';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [reviews, setReviews] = useReview([])
    return (
        <div>
            <h1>Review</h1>
            <div className="reviews-container">
                {
                    reviews.map(review => <ReviewItem key={review.id} review={review}></ReviewItem>)
                }
            </div>
        </div>
    );
};

export default Review;