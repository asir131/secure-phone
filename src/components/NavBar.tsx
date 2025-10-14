"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import logo from "@/assets/logo.png";

const NavBar = () => {
  
  const [isHovered, setIsHovered] = useState(false);

  
  const loginButtonStyle = {
    borderWidth: '1px',
    borderStyle: 'solid', 
    borderImage: isHovered ? 'linear-gradient(to left, #0082F2, #181818) 1' : 'linear-gradient(to right, #0082F2, #181818) 1',
    borderRadius: '2px', 
    padding: '0.5rem 1.5rem',
    fontWeight: '600',
    color: 'white',
    backgroundColor: 'transparent',
    transition: 'border-image 0.3s ease', 
  };

  return (
    <div className='pt-10'>
        <div className='text-white flex items-center justify-between mx-30 rounded-xl bg-[#040811] border border-[#1D97FF36] sticky top-[10px] z-50 px-5 py-4'>
        <div>
            <Image src={logo} width={150} height={100} alt='lt'/>
        </div>
        <div className='flex gap-16'>
            <h1>Home</h1>
            <h1>How It works</h1>
            <h1>Pricing</h1>
        </div>
        <div className='flex gap-5'>
            <button>SIGN UP</button>
            <button 
              style={loginButtonStyle}
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)} 
            >
              LOGIN
            </button>
        </div>
    </div>
    </div>
  );
};

export default NavBar;
