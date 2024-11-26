import React from 'react'
import './about.css'

function About() {
  return (
    <div className='about'>
      <div className="left">
        <img className='aboutimg' src="/duv4.jpg" alt="" />
      </div>
      <div className="right">
        <div className="a1 a"></div>
        <div className="a1">
            <p>ABOUT US</p>
            <p>At Duvea, we create affordable, student-focused travel experiences that blend adventure, culture, and relaxation. With personalized packages and passionate guides, we ensure every journey is memorable and seamless. We also try to connect with people to make their experiences truly enriching and unforgettable.</p>
            <p>By prioritizing comfort, safety, and exploration, we inspire travelers to step out of their comfort zones and discover the beauty the world has to offer. Whether it’s exploring vibrant cultures or unwinding in serene landscapes, every Duvea journey is designed to leave a lasting impression.</p>
        </div>
        <div className="a1 a"><p>"TRAVEL THE DUNIA WITH DUVEA"</p> </div>
      </div>
    </div>
  )
}

export default About
