// import React from 'react';
// import amountIcon from "@/assets/amountIcon.png"
// import Image from 'next/image';
// import { IoIosArrowDropright } from 'react-icons/io';
// import fire from "@/assets/fireball.png"

// const cardData = [
//     {
//         id: 1,
//         category: "NORMAL",
//         amountFirst: "100/",
//         amountLast: "15Min",

//         text: "Access to a randomly assigned phone line.",
//         btn: "Choose plan with random",
//         features: [
//             "Real - time SMS messages", "15 - minute auto -delete", "Basic security features"
//         ]
//     },
//     {
//         id: 2,
//         category: "PRO",
//         amountFirst: "200/",
//         amountLast: "30Min",
//         tag: "Most Popular",
//         text: "Choose your specific phone line number.",
//         btn: "Choose plan with specific line",
//         features: [
//             "Real - time SMS messages", "15 - minute auto -delete", "Choose your phone number", "Enhance security features"
//         ]
//     },
//     {
//         id: 3,
//         category: "PREMIUM",
//         amountFirst: "300/",
//         amountLast: "45Min",

//         text: "Extended access with premium features.",
//         btn: "Choose plan with premium",
//         features: [
//             "Real - time SMS messages", "15 - minute auto -delete", "Choose your phone number", "Full hour of access", "Premium support"
//         ]
//     }
// ]

// const PricingCards = () => {

//     return (
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'>
//             {cardData.map(card =>

//                 <div
//                     key={card.id}
//                     className='group relative p-[1px] rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent hover:from-[#0685F1] hover:to-[#AAD8FF] transition-all duration-300'
//                 >
//                     <div key={card.id} className='text-white p-10 border bg-[#000000] border-[#323232] rounded-2xl flex flex-col gap-6 lg:h-[600px]'>

//                         <div className='relative'>

//                             <div>
//                                 <h2 className='font-["inter"] lg:text-2xl tracking-[8px]'>{card.category}</h2>
//                             </div>

//                             {
//                                 card.tag ? <div className=' absolute  flex flex-row items-center gap-2 bg-[#0F1D2A] rounded-lg p-4 justify-self-end -mt-12'>
//                                     <Image src={fire} width={20} height={20} alt=''></Image>
//                                     <p className='font-["inter"] lg:font-medium'>{card.tag}</p>
//                                 </div> : <div className=''></div>
//                             }
//                         </div>
//                         <div className='flex gap-3 items-center'>
//                             <Image src={amountIcon} width={40} height={40} alt=''></Image>
//                             <div className='flex flex-row items-end'>
//                                 <p className='lg:text-3xl font-["inter"]'>{(card.amountFirst)}</p>
//                                 <p>{card.amountLast}</p>
//                             </div>

//                         </div>
//                         <p className='font-["inter"]'>{card.text}</p>

//                         <div

//                             className='group my-6 relative rounded-2xl hover:shadow-[0_0_12px_#0082F2] bg-gradient-to-br from-transparent via-transparent to-transparent hover:from-[#0685F1] hover:to-[#AAD8FF] transition-all'
//                         >
//                             <button className='border hover:border-[#217ECE] border-[#323232] w-full p-3 rounded-xl font-["inter"] bg-[#0F1D2A]'>{card.btn}</button>

//                         </div>
//                         <div className='flex flex-col gap-4'>
//                             {(card.features).map((feature, index) => <p key={index} className='flex gap-3 items-center font-["inter"]'><IoIosArrowDropright size={30} />{feature}</p>)}
//                         </div>

//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PricingCards;

import React from "react";
import amountIcon from "@/assets/amountIcon.png";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";
import fire from "@/assets/fireball.png";

const cardData = [
  {
    id: 1,
    category: "NORMAL",
    amountFirst: "100/",
    amountLast: "15Min",
    text: "Access to a randomly assigned phone line.",
    btn: "Choose plan with random",
    features: [
      "Real-time SMS messages",
      "15-minute auto-delete",
      "Basic security features",
    ],
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
      "Real-time SMS messages",
      "15-minute auto-delete",
      "Choose your phone number",
      "Enhanced security features",
    ],
  },
  {
    id: 3,
    category: "PREMIUM",
    amountFirst: "300/",
    amountLast: "45Min",
    text: "Extended access with premium features.",
    btn: "Choose plan with premium",
    features: [
      "Real-time SMS messages",
      "15-minute auto-delete",
      "Choose your phone number",
      "Full hour of access",
      "Premium support",
    ],
  },
];

const PricingCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-transparent via-transparent to-transparent hover:from-[#0685F1]/50 hover:to-[#AAD8FF]/50 transition-all duration-300"
        >
          <div className="text-white p-6 sm:p-8 md:p-10 border bg-[#000000] border-[#323232] rounded-2xl flex flex-col gap-5 sm:gap-6 h-full min-h-[520px] md:min-h-[580px] lg:min-h-[600px]">
            {/* Category + Tag */}
            <div className="relative">
              <h2 className='font-["inter"] text-xl sm:text-2xl tracking-[5px] sm:tracking-[8px]'>
                {card.category}
              </h2>

              {card.tag && (
                <div className="absolute flex flex-row items-center gap-2 bg-[#0F1D2A] rounded-lg p-2 sm:p-3 md:p-4 -mt-10 sm:-mt-12 right-0 ">
                  <Image src={fire} width={20} height={20} alt="fire" />
                  <p className='font-["inter"] text-sm sm:text-base font-medium'>
                    {card.tag}
                  </p>
                </div>
              )}
            </div>

            {/* Amount Section */}
            <div className="flex gap-2 sm:gap-3 items-end sm:items-center">
              <Image
                src={amountIcon}
                width={35}
                height={35}
                alt="amount icon"
                className="sm:w-[40px]"
              />
              <div className="flex flex-row items-end sm:items-center">
                <p className='text-2xl sm:text-3xl font-["inter"]'>
                  {card.amountFirst}
                </p>
                <p className="text-sm sm:text-base">{card.amountLast}</p>
              </div>
            </div>

            {/* Text */}
            <p className='font-["inter"] text-sm sm:text-base'>{card.text}</p>

            {/* Button */}
            <div className="group my-4 sm:my-6 relative rounded-2xl hover:shadow-[0_0_12px_#0082F2] bg-gradient-to-br from-transparent via-transparent to-transparent hover:from-[#0685F1] hover:to-[#AAD8FF] transition-all">
              <button className='border hover:border-[#217ECE] border-[#323232] w-full p-2 sm:p-3 rounded-xl font-["inter"] bg-[#0F1D2A] text-sm sm:text-base'>
                {card.btn}
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {card.features.map((feature, index) => (
                <p
                  key={index}
                  className='flex gap-2 sm:gap-3 items-center font-["inter"] text-sm sm:text-base'
                >
                  <IoIosArrowDropright size={22} className="sm:size-[26px]" />
                  {feature}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
