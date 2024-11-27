import React from 'react';

function Team() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <div className="flex border flex-col justify-around items-center bg-black h-[80%] w-[90vw] lg:w-[30vw]">
        {/* Content goes here */}
        <p>OUR FOUNDER</p>
        <div className="h-[200px] w-[200px] overflow-hidden rounded-full border-2">        <img src="./aslam.webp" alt="" />        </div>
        <p>ASLAM MUHAMMED</p>
        <p className='px-6 italic'>"At Duvea, we believe that travel is more than just visiting new places; it’s about discovering yourself, forming lasting connections, and making memories that will stay with you forever. Our goal is to offer you unique, personalized, and affordable travel experiences, without compromising on quality."
        </p>
      </div>
    </div>
  );
}

export default Team;
