import React from 'react'
import './Bento.css'

function Bento() {
  return (
    <div className='bento'>
        <p className='flex align-items-center justify-center text-4xl mt-5 font-bold'>OUR DESTINATIONS</p>
<div className="grid grid-cols-4 sm:grid-cols-8 grid-rows-3 gap-4 h-screen mx-4 my-4">
  <div className=" flex  h-full ">Rajasthan</div>
  <div className=" h-full "><img src="./rj2.jpg" alt="" /></div>
  <div className=" flex  h-full "><img src="./rj1.jpg" className='object-cover' alt="" /></div>
  <div className=" h-full  overflow-hidden"><img src="./rj3.jpeg" className='object-cover' alt="" /></div>
  <div className="overflow-hidden flex items-center justify-center h-full "><img src="./rj4.jpg" className='object-cover' alt="" /></div>
  <div className="overflow-hidden  h-full "><img src="./rj5.jpg" className='object-cover' alt="" /></div>
  <div className="overflow-hidden  h-full ">Mumbai</div>
  <div className="overflow-hidden h-full "><img src="./mum.jpeg" alt="" /></div>

  <div className="overflow-hidden h-full  "><img src="./him.webp" alt="" /></div>
  <div className="overflow-hidden  h-full ">Himachal</div>
  <div className="overflow-hidden h-full "><img src="./him2.avif" alt="" /></div>
  <div className="overflow-hidden  h-full ">Jammu & Kashmir</div>
  <div className="overflow-hidden  h-full "><img src="kash.jpeg" alt="" /></div>
  <div className="overflow-hidden  h-full "><img src="kash2.jpg" alt="" /></div>
  <div className="overflow-hidden  h-full "><img src="kash3.jpeg" alt="" /></div>
  <div className="overflow-hidden  h-full "><img src="kash4.webp" alt="" /></div>

  <div className="overflow-hidden h-full ">Hampi</div>
  <div className="overflow-hidden h-full "><img src="./hampi.jpg" alt="" /></div>
  <div className="overflow-hidden h-full ">Delhi</div>
  <div className="overflow-hidden h-full "><img src="./dilli2.jpg" alt="" /></div>
  <div className="overflow-hidden h-full "><img src="./dilli1.jpeg" alt="" /></div>
  <div className="overflow-hidden h-full ">Goa</div>
  <div className="overflow-hidden h-full "><img src="goa.jpg" alt="" /></div>
  <div className="overflow-hidden h-full "><img src="goa2.jpg" alt="" /></div>
  
</div>
    </div>
  )
}

export default Bento
