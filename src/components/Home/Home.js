import React from 'react';
import { useNavigate } from 'react-router-dom';
import getRandomInt from '../../hooks/functions';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
  let navigate = useNavigate();
  const goToReviews = () =>{
    navigate('/reviews');
  }
  return (
    <div>
      <div className='home'>
        <div className='hero-area-description'>
          <h1>Your next shoe<br/><span className='blue'>Your best shoe</span></h1>
          <p>Get the best shoe in the Market for your next one. Stand out from everyone else! Out shoes are produced from genuine leather. </p>
          <button>Live Demo</button>
        </div>
        <div className='shoe-div'>
          <img src="shoe.jpg" alt="phone" />
        </div>
      </div>
      <div className='customer-review-home'>
        <h1>Customer Reviews (3)</h1>
        <Reviews no_of_items = {3}></Reviews>
        <button onClick={goToReviews}>See All Reviews</button>
      </div>
    </div>
  );
};

export default Home;