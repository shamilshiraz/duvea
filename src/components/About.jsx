import React from 'react'
import './about.css'

function About() {
  return (
    <div className='about'>
      <div className="left">
        <img className='aboutimg' src="/gta.jpg" alt="" />
      </div>
      <div className="right">
        <div className="a1 a"></div>
        <div className="a1">
            <p>ABOUT US</p>
            <p>Welcome to Duvea, where travel meets unforgettable experiences. Based in Wayanad, Kerala, we specialize in crafting customized travel packages that cater to students, families, and corporate groups. Whether it’s exploring India’s cultural heritage, embarking on thrilling adventures, or fostering connections through unique programs, we ensure every journey is seamless and memorable.
            </p>
            <p>At Duvea, we believe in offering budget-friendly trips without compromising on quality. Our professional and passionate team is dedicated to delivering personalized services, ensuring that every traveler discovers the joy of exploring the world with us.

</p>
        </div>
        <div className="a1 ">
            <p>Let us help you create memories that last a lifetime.            </p>
            <p>"Explore Dhuniya with Duvea!"</p> </div>
      </div>
    </div>
  )
}

export default About
