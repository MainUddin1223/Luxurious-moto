import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReview([]);
    const first3Review = reviews.slice(0, 3)
    return (
        <div className='home-container'>
            <div className="welcome-section">
                <div className='home-description'>
                    <h1>
                        LIFE IS SHORT <br /> MAKE IT LUXURIOUS
                   </h1>
                    <p>Our life is nothing but a sum of time.That time is running out continuously.One day our time will runout and you can take your wealth with you . So enjoy your life and be luxurious and be part of our luxury club by buying luxurious CAR.</p>
                    <button>EXPLORE US</button>
                </div>
                <div className='cover-photo'>
                    <img src="https://www.tuningblog.eu/wp-content/uploads/2020/04/RTR-Vehicles-2020-Ford-Mustang-GT-Spec-5-Tuning-Widebody-7.jpg" alt="" />
                </div>
            </div>
            <div className="review-section">
                <h1>Review</h1>
                <div>
                    {
                        first3Review.map(review => <div>
                            <img src={review.img} />
                            <h4>Name:{review.name}</h4>
                            <p>Feedback:{review.comment}</p>
                            <p>Rating : {review.rating}</p>
                        </div>)
                    }
                </div>
                <button><Link to='/review'>More review...</Link></button>
            </div>

        </div>
    );
};

export default Home;