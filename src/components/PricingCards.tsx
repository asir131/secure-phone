
import React from 'react';
import amountIcon from "@/assets/amountIcon.png"
import Image from 'next/image';
import { IoIosArrowDropright } from 'react-icons/io';


const cardData=[
    {
        id:1,
        category:"NORMAL",
        amount: "100/15Min",
        text: "Access to a randomly assigned phone line.",
        btn:"Choose plan with random",
        features:[
            "Real - time SMS messages","15 - minute auto -delete","Basic security features"
        ]
    },
    {
        id:2,
        category: "PRO",
        amount:"200/30Min",
        text:"Choose your specific phone line number.",
        btn:"Choose plan with specific line",
        features:[
            "Real - time SMS messages","15 - minute auto -delete","Choose your phone number","Enhance security features"
        ]
    },
    {
        id:3,
        category:"PREMIUM",
        amount:"300/45Min",
        text:"Extended access with premium features.",
        btn:"Choose plan with premium",
        features:[
            "Real - time SMS messages","15 - minute auto -delete","Choose your phone number","Full hour of access","Premium support"
        ]
    }
]

const PricingCards = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {cardData.map(card=><div key={card.id} className='text-white p-10 border border-gray-500/60 rounded-2xl flex flex-col gap-6'>
                <h2 className='font-["inter"] lg:text-2xl tracking-[8px]'>{card.category}</h2>
                <div className='flex gap-3 items-center'>
                    <Image src={amountIcon} width={40} height={40} alt=''></Image>
                    <p>{card.amount}</p>
                </div>
                <p className='font-["inter"]'>{card.text}</p>
                <button className='border border-gray-300/50 w-full p-3 rounded-xl'>{card.btn}</button>
                <div className='flex flex-col gap-4'>
                    {(card.features).map((feature,index)=><p key={index} className='flex gap-3 items-center'><IoIosArrowDropright size={30}/>{feature}</p>)}
                </div>
            </div>)}
        </div>
    );
};

export default PricingCards;