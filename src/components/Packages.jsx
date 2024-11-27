import React from 'react'

function Packages() {
  return (
    <>
    <p className='flex justify-center'>OUR PACKAGES</p>
    <div className="grid  sm:h-screen w-screen grid-rows-2 grid-cols-1 sm:grid-cols-3 gap-6 p-6 place-items-center">
      <div className="bg-[url('../rj1.jpg')] bg-cover text-white my-3 mix-blend-difference flex flex-col justify-between items-center   rounded-3xl h-full w-3/4 mix-blend-screen ">
        <p>Rajasthan-Delhi</p>
        <div className="flex-col flex w-full">
            <p className='border-b-2 mx-4 mix-blend-screen'>JODHPUR</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>JAISALMER</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>UDAIPUR</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>BIKANER</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>DELHI</p>
        </div>
        <button className='rounded-full px-3 border bg-white text-black hover:bg-black my-3 hover:text-white duration-300 '>Iterinerary</button>
            </div>
      <div className="bg-[url('./him.webp')] bg-cover text-white my-3 mix-blend-difference flex flex-col justify-between items-center   rounded-3xl h-full w-3/4 mix-blend-screen ">
        <p>Himachal-Delhi</p>
        <div className="flex-col flex w-full">
            <p className='border-b-2 mx-4 mix-blend-screen'>KULLU</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>MANALI</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>KASOL</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>DELHI</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>AGRA</p>
        </div>
        <button className='rounded-full px-3 border bg-white text-black hover:bg-black my-3 hover:text-white duration-300 '>Iterinerary</button>
        </div>
      <div className="bg-[url('./kash2.jpg')] bg-cover text-white my-3 mix-blend-difference flex flex-col justify-between items-center   rounded-3xl h-full w-3/4 mix-blend-screen ">
        <p>Kashmir</p>
        <div className="flex-col flex w-full">
            <p className='border-b-2 mx-4 mix-blend-screen '>PAHALGAM</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>GULMARG</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>SONMARG</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>DAL LAKE</p>
        </div>
        <button className='rounded-full px-3 border bg-white text-black hover:bg-black my-3 hover:text-white duration-300 '>Iterinerary</button>
        </div>
      <div className="bg-[url('./mum.jpeg')] bg-cover text-white my-3 mix-blend-difference flex flex-col justify-between items-center   rounded-3xl h-full w-3/4 mix-blend-screen">
        <p>Maharashtra</p>
        <div className="flex-col flex w-full">
            <p className='border-b-2 mx-4 mix-blend-screen'>MUMBAI</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>LONAVALA</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>PUNE</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>MATHERAN</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>AURANGADABAD</p>
        </div>
        <button className='rounded-full px-3 border bg-white text-black hover:bg-black my-3 hover:text-white duration-300 '>Iterinerary</button>
        </div>

      <div className="bg-[url('./alep.webp')] bg-cover text-white my-3 mix-blend-difference flex flex-col justify-between items-center   rounded-3xl h-full w-3/4 mix-blend-screen ">
        <p>Kerala-Tamilnadu</p>
        <div className="flex-col flex w-full">
            <p className='border-b-2 mx-4 mix-blend-screen'>WAYANAD</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>MUNNAR</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>ALEPPEY</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>OOTY</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>KODAIKANAL</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>CHENNAI</p>
        </div>
        <button className='rounded-full px-3 border bg-white text-black hover:bg-black my-3 hover:text-white duration-300 '>Iterinerary</button>
        </div>
      <div className="bg-[url('./mys.jpeg')] bg-cover text-white my-3 mix-blend-difference flex flex-col justify-between items-center   rounded-3xl h-full w-3/4 mix-blend-screen ">
        <p>Karnataka</p>
        <div className="flex-col flex w-full">
            <p className='border-b-2 mx-4 mix-blend-screen'>HAMPI</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>GOKARNA</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>DANDELI</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>MYSORE</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>BANGALORE</p>
            <p className='border-b-2 mx-4 mix-blend-screen'>MANGALORE</p>
        </div>
        <button className='rounded-full px-3  bg-white text-black hover:bg-black my-3 hover:text-white duration-300 '>Iterinerary</button>
        </div>

    </div>
    <div className="flex flex-col items-center justify-center text-center">
  <p className="px-3">
    Couldn't find one that suits you? <br />
    We have introduced customized packages just for you! Describe your package and we'll see what we can do.
  </p>
  <button className="rounded-full px-3 py-2 text-white bg-green-600 hover:bg-white my-3 hover:text-green-600 duration-300">
    <a href="https://api.whatsapp.com/send/?phone=917902990856&text&type=phone_number&app_absent=0">Discuss your package</a>
  </button>
</div>

    </>
      );
    };

export default Packages
