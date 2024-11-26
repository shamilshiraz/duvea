import React from 'react';

function Team() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <div className="flex border flex-col justify-around items-center bg-black h-[80%] w-[90vw] lg:w-[30vw]">
        {/* Content goes here */}
        <p>OUR FOUNDER</p>
        <div className="h-[200px] w-[200px] overflow-hidden rounded-full">        <img src="./rj5.jpg" alt="" />        </div>
        <p>ASLAM MUHAMMED</p>
        <p className='px-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto accusamus assumenda aliquam voluptatum inventore ipsa sapiente voluptate est expedita officia alias voluptatem, error debitis incidunt blanditiis enim. Autem, quam repellendus?</p>
      </div>
    </div>
  );
}

export default Team;
