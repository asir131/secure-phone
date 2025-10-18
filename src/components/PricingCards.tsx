
import React from 'react';
import amountIcon from "@/assets/amountIcon.png"
import Image from 'next/image';
import { IoIosArrowDropright } from 'react-icons/io';
import fire from "@/assets/fireball.png"


const cardData = [
    {
        id: 1,
        category: "NORMAL",
        amountFirst: "100/",
        amountLast: "15Min",

        text: "Access to a randomly assigned phone line.",
        btn: "Choose plan with random",
        features: [
            "Real - time SMS messages", "15 - minute auto -delete", "Basic security features"
        ]
    },
    {
        id: 2,
        category: "PRO",
        amountFirst: "200/",
        amountLast: "30Min",
        tag: "Most Popular",
        text: "Choose your specific phone line number.",
        btn: "Choose plan with specific line",
        features: [
            "Real - time SMS messages", "15 - minute auto -delete", "Choose your phone number", "Enhance security features"
        ]
    },
    {
        id: 3,
        category: "PREMIUM",
        amountFirst: "300/",
        amountLast: "45Min",

        text: "Extended access with premium features.",
        btn: "Choose plan with premium",
        features: [
            "Real - time SMS messages", "15 - minute auto -delete", "Choose your phone number", "Full hour of access", "Premium support"
        ]
    }
]

const PricingCards = () => {


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'>
            {cardData.map(card =>

                <div
                    key={card.id}
                    className='group relative p-[1px] rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent hover:from-[#0685F1] hover:to-[#AAD8FF] transition-all duration-300'
                >
                    <div key={card.id} className='text-white p-10 border bg-[#000000] border-[#323232] rounded-2xl flex flex-col gap-6 lg:h-[600px]'>


                        <div className='relative'>

                            <div>
                                <h2 className='font-["inter"] lg:text-2xl tracking-[8px]'>{card.category}</h2>
                            </div>

                            {
                                card.tag ? <div className=' absolute  flex flex-row items-center gap-2 bg-[#0F1D2A] rounded-lg p-4 justify-self-end -mt-12'>
                                    <Image src={fire} width={20} height={20} alt=''></Image>
                                    <p className='font-["inter"] lg:font-medium'>{card.tag}</p>
                                </div> : <div className=''></div>
                            }
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Image src={amountIcon} width={40} height={40} alt=''></Image>
                            <div className='flex flex-row items-end'>
                                <p className='lg:text-3xl font-["inter"]'>{(card.amountFirst)}</p>
                                <p>{card.amountLast}</p>
                            </div>

                        </div>
                        <p className='font-["inter"]'>{card.text}</p>

                        <div

                            className='group my-6 relative rounded-2xl hover:shadow-[0_0_12px_#0082F2] bg-gradient-to-br from-transparent via-transparent to-transparent hover:from-[#0685F1] hover:to-[#AAD8FF] transition-all'
                        >
                            <button className='border hover:border-[#217ECE] border-[#323232] w-full p-3 rounded-xl font-["inter"] bg-[#0F1D2A]'>{card.btn}</button>





                        </div>
                        <div className='flex flex-col gap-4'>
                            {(card.features).map((feature, index) => <p key={index} className='flex gap-3 items-center font-["inter"]'><IoIosArrowDropright size={30} />{feature}</p>)}
                        </div>


                    </div>
                </div>
            )}
        </div>
    );
};

export default PricingCards;