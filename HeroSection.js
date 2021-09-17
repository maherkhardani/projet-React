import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Video from '../videos/video-1.mp4';
function HeroSection() {
  return (
    <div className='hero-container'>
      <video width="750" height="500" autoPlay loop muted >
      <source src={Video} type="video/mp4"/>
</video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;