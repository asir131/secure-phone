// import React from "react";

// interface StepCardProps {
//   number: string;
//   title: string;
// }

// const StepCard: React.FC<StepCardProps> = ({ number, title }) => {
//   return (
//     <div className="flex flex-col items-center text-center relative">
//       {/* Step Number */}
//       <h2 className="text-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#9cb5ff] to-[#3a5eff] leading-none">
//         {number}
//       </h2>

//       {/* Border + Text */}
//       <div className="relative flex items-center justify-center w-full max-w-xs mt-2">
//         {/* Left Border */}
//         <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#3a5eff] to-transparent relative">
//           <div className="absolute left-0 -bottom-[5px] w-0 h-0 border-t-[5px] border-t-transparent border-r-[8px] border-r-[#3a5eff] border-b-[5px] border-b-transparent"></div>
//         </div>

//         {/* Text */}
//         <span className="mx-4 text-lg font-medium text-[#7ea1ff]">
//           {title}
//         </span>

//         {/* Right Border */}
//         <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#3a5eff] to-transparent relative">
//           <div className="absolute right-0 -bottom-[5px] w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-[#3a5eff] border-b-[5px] border-b-transparent"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepCard;


import React from "react";

interface StepCardProps {
  number: string;
  title: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title }) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Number */}
      <h2 className="text-[90px] font-extrabold text-[#9cb5ff] leading-none relative z-10">
        {number}
      </h2>

      {/* Rectangle Borders */}
      <svg
        className="absolute top-[50px] w-[420px] h-[140px] text-[#5a7cff]"
        viewBox="0 0 420 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* LEFT SIDE */}
        <path
          d="M210 0 H100 V100 H40"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Left Arrow */}
        <path
          d="M40 100 L48 96 L45 104 Z"
          fill="currentColor"
        />

        {/* RIGHT SIDE */}
        <path
          d="M210 0 H320 V100 H380"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Right Arrow */}
        <path
          d="M380 100 L372 96 L375 104 Z"
          fill="currentColor"
        />
      </svg>

      {/* Text */}
      <span className="mt-[110px] text-[#7ea1ff] text-xl font-medium">
        {title}
      </span>
    </div>
  );
};

export default StepCard;
