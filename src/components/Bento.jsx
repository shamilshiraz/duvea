import React from 'react'
import './Bento.css'

function Bento() {
  return (
    <div className='bento'>
        <p className='flex align-items-center justify-center'>OUR DESTINATIONS</p>
<div className="grid grid-cols-4 sm:grid-cols-8 grid-rows-3 gap-4 h-screen mx-4 my-4">
  <div className="hover:border flex  h-full hover:border">Rajasthan</div>
  <div className=" h-full hover:border"><img src="./rj2.jpg" alt="" /></div>
  <div className=" flex  h-full hover:border"><img src="./rj1.jpg" className='object-cover' alt="" /></div>
  <div className=" h-full hover:border overflow-hidden"><img src="./rj3.jpeg" className='object-cover' alt="" /></div>
  <div className="overflow-hidden flex items-center justify-center h-full hover:border"><img src="./rj4.jpg" className='object-cover' alt="" /></div>
  <div className="overflow-hidden  h-full hover:border"><img src="./rj5.jpg" className='object-cover' alt="" /></div>
  <div className="overflow-hidden  h-full hover:border">Mumbai</div>
  <div className="overflow-hidden h-full hover:border"><img src="./mum.jpeg" alt="" /></div>

  <div className="overflow-hidden  hover:border "><img src="./him.webp" alt="" /></div>
  <div className="overflow-hidden  h-full hover:border">Himachal</div>
  <div className="overflow-hidden h-full hover:border"><img src="./him2.avif" alt="" /></div>
  <div className="overflow-hidden  h-full hover:border">Kashmir</div>
  <div className="overflow-hidden  h-full hover:border"><img src="kash.jpeg" alt="" /></div>
  <div className="overflow-hidden  h-full hover:border"><img src="kash2.jpg" alt="" /></div>
  <div className="overflow-hidden  h-full hover:border"><img src="kash3.jpeg" alt="" /></div>
  <div className="overflow-hidden  h-full hover:border"><img src="kash4.webp" alt="" /></div>

  <div className="overflow-hidden h-full hover:border">Hampi</div>
  <div className="overflow-hidden h-full hover:border"><img src="./hampi.jpg" alt="" /></div>
  <div className="overflow-hidden h-full hover:border">Delhi</div>
  <div className="overflow-hidden h-full hover:border"><img src="./dilli2.jpg" alt="" /></div>
  <div className="overflow-hidden h-full hover:border"><img src="./dilli1.jpeg" alt="" /></div>
  <div className="overflow-hidden h-full hover:border">Goa</div>
  <div className="overflow-hidden h-full hover:border"><img src="goa.jpg" alt="" /></div>
  <div className="overflow-hidden h-full hover:border"><img src="goa2.jpg" alt="" /></div>
  
</div>



    </div>
  )
}

export default Bento
