"use client";
import React, { useState } from 'react';
import { CardData, cardDataType } from '../../../constans';
import Image from 'next/image';

// Modal component
const Modal = ({ isOpen, onClose, coin }: { isOpen: boolean, onClose: () => void, coin: string }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay backdrop-blur-3xl z-50">
            <div className='payout_modal z-50 text-white'>
                <div className="">
                    <div className=" rounded-xl p-8 max-w-md text-center z-10">
                        <div className="flex flex-row gap-2 justify-center items-center">
                            <p className="text-[#E6E6E6] font-['inter'] text-2xl font-medium">{coin}</p>
                        </div>
                        <h3 className="text-[#D8D8D8] font-['inter'] font-medium lg:text-2xl/normal mb-4">
                            Are you sure you want to spend <span className="text-blue-400">{coin}</span> coins
                            to purchase this plan?
                        </h3>

                        <div className="flex flex-row-reverse justify-center gap-4 mt-6">
                            <button
                                onClick={onClose}
                                className="border-[1px] border-blue-500 text-white px-8 py-2 rounded-lg font-medium transition cursor-pointer font-['inter'] lg:text-lg"
                            >
                                Yes
                            </button>
                            <button
                                onClick={onClose}
                                className="cursor-pointer text-[#E96567] font-['inter'] lg:text-lg px-5 py-2 rounded-lg font-medium transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Buy_now = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [coin, setCoin] = useState('100'); // Coin value or other data can be dynamically set here

    // Form submit handler
    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        // Convert formData to a plain object
        const data = Object.fromEntries(formData.entries());

        // Log the data (you can use it as needed, e.g., send it to an API)
        console.log(data);

        // Open the modal after form submission
        setIsModalOpen(true);
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form onSubmit={formSubmit}>
                {/* Card section */}
                <div className='flex gap-[50px]'>
                    {
                        CardData.map((card: cardDataType, index: number) => {
                            return (
                                <div key={index} className='card_layout'>
                                    <Image src={card.icon} alt={card.name} />
                                    <p className='text-[#E6E6E6] h-full flex justify-end items-end'>{card.name}</p>
                                </div>
                            );
                        })
                    }
                </div>

                <div className='flex flex-col gap-[64px]'>
                    {/* Card Number input */}
                    <div className='text-[#E6E6E6] z-50 flex flex-col gap-[6px] pt-[40px]'>
                        <label className='text-[24px] text-[#E6E6E6]'>Card Number</label>
                        <input name='card_number' className='focus:outline-none card_input text-[#E6E6E6]' placeholder='43 837 8398 73798' type="number" required />
                    </div>

                    {/* Expiration Date and Security Code */}
                    <div className='flex justify-between gap-[50px]'>
                        <div className='w-full flex flex-col gap-3'>
                            <label htmlFor="expire_date" className='text-[#E6E6E6] text-2xl font-medium'>Expiration Date</label>
                            <input name='expire_date' className='coin w-full focus:outline-none text-[#E6E6E6]' placeholder='MM/YY' type="number" required />
                        </div>
                        <div className='w-full flex flex-col gap-3'>
                            <label htmlFor="security_code" className='text-[#E6E6E6] text-2xl font-medium'>Security Code</label>
                            <input name="security_code" className="coin w-full focus:outline-none text-[#E6E6E6]" placeholder='CVC' type="number" required />
                        </div>
                    </div>

                    {/* Pay Button */}
                    <div className='w-full'>
                        <button type='submit' className='pay_btn w-full text-[#fff] text-[18px] font-semibold cursor-pointer'>Pay $</button>
                    </div>
                </div>
            </form>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} coin={coin} />
        </div>
    );
}

export default Buy_now;
