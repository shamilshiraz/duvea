import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

function Footer() {
  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Footer Content */}
      <div className="h-[100vh] w-screen  p-6 relative">

        <div className="absolute bottom-6 right-6 text-right">
          {/* Logo */}
          <img src="/logo.png" className="h-[150px] place-self-end " alt="Logo" />
          {/* Contact Text */}
          <p className="text-[3rem] sm:text-[5rem] font-thin mb-4">CONTACT</p>            <p className="mb-4">duvea@gmail.com | +91 895555478</p>

          {/* Social Icons */}
          <div className="text-3xl sm:text-2xl flex space-x-4 justify-end">
            <a href="https://api.whatsapp.com/send/?phone=917902990856&text&type=phone_number&app_absent=0">            <FaWhatsapp /></a>
            <a href="https://www.instagram.com/duveatravelco?igsh=eGl3YzdydGIzNXBj"><CiInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
