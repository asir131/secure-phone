"use client"
import React, { useState } from 'react'
import { Mail } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { Eye } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import { EyeOff } from 'lucide-react';
const Login = () => {
    const [checked, setChecked] = useState(false);
    const [showPassword,setShowPassword] = useState(false);
    console.log("showPassword",showPassword);
    
    return (
        <div className='flex flex-col items-center justify-center text-white min-h-screen'>

            <div className='mb-14'>
                <h1 className='font-semibold text-5xl'>Welcome Back</h1>
                <p className='text-center font-medium text-2xl mt-3'>Login to your account</p>
            </div>

            <div className='flex flex-col gap-5'>
                <label className='font-medium ' htmlFor="">Enter your E-mail or Number</label>
                <div className='flex border gap-2 border-[#0082F2] py-3 px-5 rounded-lg min-w-sm lg:min-w-md'>
                    <Mail />
                    <input className='w-full focus:outline-none focus:ring-0' type="text" placeholder='E-mail address or phone number' />
                </div>

            </div>

            <div className='flex flex-col gap-5 mt-3 '>
                <label className='font-medium' htmlFor="">Password</label>
                 <div className="flex justify-between items-center border gap-2 border-[#0082F2] py-3 px-5 rounded-lg min-w-sm lg:min-w-md">
      <span className="flex items-center gap-2 w-full">
        <LockKeyhole />
        <input
          className="w-full bg-transparent focus:outline-none focus:ring-0"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
        />
      </span>

      <button className='cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
        
      {
        showPassword ? <Eye
        
        size={20}
        
      /> : <EyeOff  size={20}/>
      }
      
      </button>
    </div>

                <div className='flex justify-between  w-full'>
                    <div className='cursor-pointer' onClick={() => setChecked(!checked)}>
                        <label
                            className="flex items-center space-x-2 cursor-pointer select-none text-gray-400 hover:text-white transition"
                            
                        >
                            <span
                                className={`w-4 h-4 rounded-full  border-2 border-white transition-all duration-200 flex items-center justify-center ${checked
                                    ? " bg-white"
                                    : "border-gray-400 bg-transparent"
                                    }`}
                            >
                                {checked && (
                                    <span className="w-2 h-2 bg-white rounded-full"></span>
                                )}
                            </span>
                            <span className="text-sm">Remember me</span>
                        </label>
                    </div>
                    <p className='text-[#FF7070E5] text-xs'>
                        Forgot password?
                    </p>
                </div>

                <button className='bg-gradient-to-r from-[#2199FF] to-[#A7D6FF] w-full py-2.5 rounded-lg'>
                Login
            </button>

            <div className="flex items-center justify-center w-full text-gray-400 text-sm">
      <div className="flex-grow border-t border-gray-600"></div>
      <span className="px-3 text-gray-400">Or Continue With</span>
      <div className="flex-grow border-t border-gray-600"></div>
    </div>

    

            </div>
            <div className='bg-white mt-5 p-2 rounded-full '>
                <FcGoogle  size={40}/>
            </div>




        </div>
    )
}

export default Login