"use client"
import React from 'react';

import { useState } from "react";
import { FaPlus } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Faq = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
  {
    question: "How do I start using Secure Phone line?",
    answer:
      "To start using a secure phone line, the first step is to choose a reliable service provider that offers encrypted calling features. Once you’ve selected a provider, you usually need to register for an account and install their dedicated app or software on your device.",
  },
  {
    question: "What's the difference between Specific and Random lines?",
    answer:
      "A specific line lets you pick an exact number you prefer, but comes with a slightly higher cost. A random line is automatically assigned to you at a lower rate, offering the same secure and temporary access without any setup hassle.",
  },
  {
    question: "How long do messages stay available?",
    answer:
      "All messages are stored temporarily for 15 minutes before being auto-deleted. This ensures complete privacy — no data is kept on our servers once the timer runs out.",
  },
  {
    question: "Can I extend my session if it's about to expire?",
    answer:
      "Yes, you can purchase additional time before your session ends. Simply go to your dashboard and select 'Extend Session' to add more minutes instantly without losing your current messages.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Absolutely. All payments are processed through encrypted gateways like Stripe to protect your financial data. We never store or share your payment details with any third party.",
  },
  {
    question: "Can I use this service on mobile devices?",
    answer:
      "Yes, our platform is fully optimized for mobile and tablet use. You can securely view messages, buy coins, and manage your sessions right from your smartphone’s browser.",
  },
];

    return (
        <div className='max-w-10/12 mx-auto flex flex-col md:flex-row my-20'>

            {/* left side */}
            <div className='lg:flex-1/3 flex-1 gap-5'>
                <div className='flex flex-row items-center gap-8 mx-auto'>

                    <div className='text-xs lg:text-2xl text-[#F6F6F6] font-medium tracking-widest font-["inter"] mb-5'>FAQ</div>
                    <div className='w-[80px] lg:w-sm h-0.5 bg-gradient-to-r from-[#1A6CE5] to-[#55555]'></div>
                </div>

                <div>
                    <h2 className='text-[#F6F6F6] font-["roboto_slab"] lg:text-5xl/normal font-bold mb-3'>Frequently 
                        Askes Questions</h2>
                    <p className='text-[#C8CACC] mb-5'>Everything You Need To Know About <br />
                        Working With Us </p>
                </div>
            </div>
            {/* right side */}
            <div className='lg:flex-2/3 flex-1'>
                <div className='flex-1 space-y-4'>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className='border-[1px] border-blue-500/50 rounded-lg overflow-hidden'
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className='w-full flex justify-between items-center px-4 py-3 text-left text-[#F6F6F6] hover:bg-[#1A1A1A] transition-all duration-200'
                            >
                                <span>{faq.question}</span>
                                <span className='text-[#F6F6F6]'>
                                    {openIndex === index ? <ImCross /> : <FaPlus />}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40' : 'max-h-0'
                                    }`}
                            >
                                <p className='text-[#C8CACC] px-4 pb-4'>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;

// "use client";
// import React, { useState } from 'react';

// const Faq = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleAccordion = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: "What is this service about?",
//       answer:
//         "This service lets you view real-time SMS messages securely from virtual phone lines without exposing your personal number.",
//     },
//     {
//       question: "How long are messages stored?",
//       answer:
//         "All messages are automatically deleted after 15 minutes to ensure maximum privacy and security.",
//     },
//     {
//       question: "Can I choose a specific number?",
//       answer:
//         "Yes, you can choose a specific line for a higher cost or get a random line at a lower cost — depending on your plan.",
//     },
//   ];

//   return (
//     <div className='max-w-10/12 mx-auto flex flex-col md:flex-row py-16 gap-10'>

//       {/* left side */}
//       <div className='flex-1 space-y-6'>
//         <div className='flex flex-row items-center gap-8 mx-auto'>
//           <div className='text-xs lg:text-2xl text-[#F6F6F6] font-medium tracking-widest font-["inter"]'>FAQ</div>
//           <div className='w-[80px] lg:w-40 h-0.5 bg-gradient-to-r from-[#1A6CE5] to-[#555555]'></div>
//         </div>

//         <div>
//           <h2 className='text-[#F6F6F6] font-["roboto_slab"] lg:text-5xl/normal font-bold'>
//             Frequently <br /> Asked Questions
//           </h2>
//           <p className='text-[#C8CACC]'>
//             Everything You Need To Know About <br />
//             Working With Us
//           </p>
//         </div>
//       </div>

//       {/* right side */}
//       <div className='flex-1 space-y-4'>
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className='border border-[#2A2A2A] rounded-lg overflow-hidden'
//           >
//             <button
//               onClick={() => toggleAccordion(index)}
//               className='w-full flex justify-between items-center px-4 py-3 text-left text-[#F6F6F6] hover:bg-[#1A1A1A] transition-all duration-200'
//             >
//               <span>{faq.question}</span>
//               <span className='text-[#1A6CE5] text-xl font-semibold'>
//                 {openIndex === index ? '−' : '+'}
//               </span>
//             </button>

//             <div
//               className={`transition-all duration-300 ease-in-out overflow-hidden ${
//                 openIndex === index ? 'max-h-40' : 'max-h-0'
//               }`}
//             >
//               <p className='text-[#C8CACC] px-4 pb-4'>{faq.answer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faq;
