


"use client";

import React, { useState } from 'react';
import Image from "next/image";
import amountPic from "@/assets/amountIcon.png";
import { useRouter } from 'next/navigation';
import NavBar from './NavBar';
import Footer from './Footer';
// import NavBar from './NavBar'; // Import NavBar
// import Footer from './Footer'; // Import Footer

const NormalBuy = () => {
    const [coin, setCoin] = useState("100");
    const [min, setMin] = useState("15Min");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const user = localStorage.getItem("user")

    const handlePayClick = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleConfirm = () => {
        setIsModalOpen(false);
        router.push("/phone-manager");
        console.log(`User confirmed spending ${coin} coins`);
        // TODO: trigger actual payment logic here
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* === Navbar === */}
            <NavBar />

            {/* === Main Content === */}
            <div className="flex-grow flex items-center justify-center px-4">
                <div className="w-full max-w-7/12"> {/* max width container */}
                    <h2 className="text-white font-inter text-3xl sm:text-4xl tracking-[8px] mb-6 text-center">
                        NORMAL
                    </h2>

                    <form onSubmit={handlePayClick}>
                        <div className="flex flex-col gap-6">
                            {/* Inputs container */}
                            <div className="flex flex-col sm:flex-row gap-8">
                                {/* Coin Input */}
                                <div className="flex-1">
                                    <label className="block text-[#E6E6E6] font-['inter'] text-2xl/relaxed font-medium mb-2">
                                        Coin
                                    </label>
                                    <div className="relative">
                                        <Image
                                            src={amountPic}
                                            alt="coin icon"
                                            className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6"
                                        />
                                        <input
                                            type="text"
                                            value={coin}
                                            readOnly
                                            onChange={(e) => setCoin(e.target.value)}
                                            className="w-full border border-[#37404E] font-['inter'] lg:text-xl bg-gradient-to-b from-[#0685F1] to-[#AAD8FF] bg-clip-text rounded-lg pl-10 pr-3 py-4 text-transparent font-medium bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                {/* Time Input */}
                                <div className="flex-1">
                                    <label className="block text-[#E6E6E6] font-['inter'] text-2xl/relaxed font-medium mb-2">
                                        Time
                                    </label>
                                    <input
                                        type="text"
                                        value={min}
                                        readOnly
                                        onChange={(e) => setMin(e.target.value)}
                                        className="w-full border border-[#37404E] rounded-lg px-3 py-4 text-[#E6E6E6] font-['inter'] text-xl font-medium bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full sm:w-full max-w-full   text-[#E6E6E6] border-[1px] border-blue-500/50 py-3 rounded-lg font-['inter'] text-xl font-medium transition"
                            >
                                Pay Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* === Modal Section === */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    {/* Background Blur */}
                    <div
                        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                        onClick={handleCancel}
                    ></div>

                    {/* Modal Content */}
                    <div className="p-[1px] bg-gradient-to-b from-[#0685F1] to-[#AAD8FF] border">
                        <div className="relative bg-[#1A1A1A]/100 rounded-xl p-8  max-w-md text-center z-10">

                            <div className="flex flex-row gap-2 justify-center items-center">
                                <Image src={amountPic} width={30} height={30} alt="" className=""></Image>
                                <p className="text-[#E6E6E6] font-['inter'] text-2xl font-medium">{coin}</p>
                            </div>
                            <h3 className="text-[#D8D8D8] font-['inter'] font-medium lg:text-2xl/normal mb-4">
                                Are you sure you want to spend{" "}
                                <span className="text-blue-400">{coin}</span> coins to purchase
                                this plan?
                            </h3>

                            <div className="flex flex-row-reverse justify-center gap-4 mt-6">
                                <button
                                    onClick={handleConfirm}
                                    className="border-[1px] border-blue-500 text-white px-8 py-2 rounded-lg font-medium transition cursor-pointer font-['inter'] lg:text-lg"
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className="cursor-pointer text-[#E96567] font-['inter'] lg:text-lg px-5 py-2 rounded-lg font-medium transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* === Footer === */}
            <Footer />
        </div>
    );
};

export default NormalBuy;
