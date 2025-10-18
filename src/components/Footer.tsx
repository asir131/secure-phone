import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#06090E] text-gray-300 py-12 my-20">
            {/* main container with 10/12 width centered */}
            <div className="max-w-10/12 mx-auto px-6 md:px-12 lg:px-0">
                <div className="flex flex-col md:flex-row justify-between">

                    {/* Logo + Newsletter */}
                    <div className="flex flex-col justify-between gap-6">
                        {/* Logo */}
                        <div>
                            <Image
                                src={logo}
                                width={150}
                                height={100}
                                alt="logo"
                                className="w-36 h-auto"
                            />
                        </div>

                        {/* Newsletter Input */}

                        <div className="flex items-center bg-[#0E141B] border border-gray-700 rounded-lg overflow-hidden w-full max-w-sm px-2 py-1 mt-5">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="bg-transparent flex-1 px-4 py-3 outline-none font-['inter'] text-gray-200 placeholder-gray-500 min-w-0"
                            />
                            <button className="bg-[#1E9BF0] hover:bg-[#1a8cd8] text-white px-4 py-3 flex items-center justify-center rounded-lg flex-shrink-0">
                                <FaTelegramPlane size={18} />
                            </button>
                        </div>
                    </div>




                    {/* Explore Section */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-[#F6F6F6] text-[1rem] font-['inter'] my-5">Explore</h3>
                        <a href="#" className="text-[#C8CACC] text-[1rem] font-['inter']">Home</a>
                        <a href="#" className="text-[#C8CACC] text-[1rem] font-['inter']">How It works</a>
                        <a href="#" className="text-[#C8CACC] text-[1rem] font-['inter']">Pricing</a>
                    </div>

                    {/* Support Section */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-[#F6F6F6] text-[1rem] font-['inter'] my-5">Support</h3>
                        <a href="#" className="text-[#C8CACC] text-[1rem] font-['inter']">Contact Us</a>
                        <a href="#" className="text-[#C8CACC] text-[1rem] font-['inter']">404 Page</a>
                        <a href="#" className="text-[#C8CACC] text-[1rem] font-['inter']">Privacy Policy</a>
                        <a href="#" className="text-[#C8CACC] text-[1rem] font-['inter']">Terms and Conditions</a>
                    </div>

                    {/* Follow Us */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-[#F6F6F6] text-[1rem] font-['inter'] my-5">Follow Us</h3>
                        <a href="#" className="text-[#1E9BF0] hover:text-[#38bdf8] transition">
                            <FaTelegramPlane size={24} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;


