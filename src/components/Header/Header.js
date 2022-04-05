import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <div className='header-container'>
        <div className='header'>
          <CustomLink to='/home'>Home</CustomLink>
          <CustomLink to='/reviews'>Reviews</CustomLink>
          <CustomLink to='/dashboard'>Dashboard</CustomLink>
          <CustomLink to='/blogs'>Blogs</CustomLink>
          <CustomLink to='/about'>About</CustomLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;