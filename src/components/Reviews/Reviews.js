import React from 'react';
import {getRandomInt} from '../../hooks/functions';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = (props) => {
  let no_of_items = 0;
  const pathname = window.location.pathname;
  if ('no_of_items' in props){
    no_of_items = props.no_of_items;
  }
  const [reviews, setReviews] = useReviews();

  const slicing = (no_of_items) =>{
    if(no_of_items === 3)
      return reviews.slice(0,3).map(user_review => 
        <Review
          key={user_review._id}
          user_review = {user_review}
        ></Review>)
    else
        return reviews.map(user_review => 
          <Review
            key={user_review._id}
            user_review = {user_review}
          ></Review>)
  }

  let customerReviewTitle = [];
  if(pathname === '/reviews')
    customerReviewTitle.push(<h1 key={getRandomInt(100000)}>What our customers say!</h1>);
  else {
    
  }


  return (
    <div>
      {customerReviewTitle}
      <div className='review-container'>
        { slicing(no_of_items) }
      </div>
    </div>
  );
};

export default Reviews;