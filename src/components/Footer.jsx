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
          <p className="text-8xl mb-4 ">CONTACT</p>
          <p className="mb-4">duvea@gmail.com | +91 895555478</p>

          {/* Social Icons */}
          <div className="text-3xl flex space-x-4 justify-end">
            <CiInstagram />
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
