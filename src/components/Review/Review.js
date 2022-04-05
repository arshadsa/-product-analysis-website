import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalf } from '@fortawesome/free-solid-svg-icons'
import {getRandomInt} from '../../hooks/functions';

const Review = ({user_review}) => {
  
  const {name, review, picture} = user_review;
  const starReview = (review) =>
  { 
    let reviewOutput = [];
    for(let i=1;i<=parseInt(review);i++)
    {
      reviewOutput.push(<FontAwesomeIcon key={getRandomInt(100000)} icon={faStar} />);
    }
    if(review%1>=0.25) reviewOutput.push(<FontAwesomeIcon key={getRandomInt(100000)} icon={faStarHalf} />);
    return reviewOutput;
  }
  return (
    <div className='user-review'>
      <div className='user-pic'>
        <img src={picture} alt=""  />
      </div>
      <div className='user-review-text'>
        <p>Name: {name}</p>
        <p>Review: {review}</p>
        <p>{starReview(review)}</p>        
      </div>
    </div>
  );
};

export default Review;