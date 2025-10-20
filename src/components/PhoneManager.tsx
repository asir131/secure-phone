

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import NavBar from "./NavBar";  // Assuming you have a NavBar component
// import Footer from "./Footer";  // Assuming you have a Footer component

// const countryData = [
//     { code: "+1", flag: "https://flagcdn.com/us.svg" },
//     { code: "+44", flag: "https://flagcdn.com/gb.svg" },
//     { code: "+880", flag: "https://flagcdn.com/bd.svg" },
//     { code: "+91", flag: "https://flagcdn.com/in.svg" },
//     { code: "+81", flag: "https://flagcdn.com/jp.svg" },
//     { code: "+61", flag: "https://flagcdn.com/au.svg" },
// ];

// type PhoneItem = {
//     id: number;
//     code: string;
//     flag: string;
//     number: string;
// };

// const PhoneManager: React.FC = () => {
//     const [generatedNumber, setGeneratedNumber] = useState<string>("");
//     const [generatedFlag, setGeneratedFlag] = useState<string>("");
//     const [phoneList, setPhoneList] = useState<PhoneItem[]>([]);
//     const [search, setSearch] = useState<string>("");

//     // Generate random number
//     const handleGenerate = () => {
//         const randomCountry =
//             countryData[Math.floor(Math.random() * countryData.length)];
//         const randomNum = Math.floor(100000000 + Math.random() * 900000000);
//         setGeneratedNumber(`${randomCountry.code}${randomNum}`);
//         setGeneratedFlag(randomCountry.flag);
//     };

//     // Confirm number
//     const handleConfirm = () => {
//         if (!generatedNumber) return;
//         const newItem: PhoneItem = {
//             id: Date.now(),
//             code: generatedNumber.slice(0, 4),
//             flag: generatedFlag,
//             number: generatedNumber,
//         };
//         setPhoneList((prev) => [...prev, newItem]);
//         setGeneratedNumber("");
//     };

//     // Search filter
//     const filteredList = phoneList.filter((item) =>
//         item.number.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#020617] to-[#0f172a] text-white">
//             {/* === Navbar === */}
//             <NavBar />

//             {/* === Main Content === */}
//             <div className="w-10/12 mx-auto mt-6 grid md:grid-cols-3 gap-10 px-6 py-10 rounded-2xl backdrop-blur-xl bg-white/5 shadow-2xl border border-white/10">
//                 {/* === Left Column === */}
//                 <div className="flex flex-col items-center justify-center gap-4">
//                     <button
//                         onClick={handleGenerate}
//                         className="w-full border border-cyan-400 text-cyan-300 py-2 rounded-md hover:bg-cyan-400/10 transition"
//                     >
//                         Generate
//                     </button>

//                     {/* Phone Number Input */}
//                     <div className="relative w-full">
//                         <input
//                             type="text"
//                             placeholder="+880....."
//                             value={generatedNumber}
//                             readOnly
//                             className="w-full bg-transparent border border-cyan-400 text-center py-2 rounded-md focus:outline-none text-cyan-100 placeholder:text-cyan-600"
//                         />
//                     </div>

//                     <button
//                         onClick={handleConfirm}
//                         className="w-full border border-cyan-400 text-cyan-300 py-2 rounded-md hover:bg-cyan-400/10 transition"
//                     >
//                         Confirm
//                     </button>
//                 </div>

//                 {/* === Middle Column === */}
//                 <div className="flex flex-col items-center justify-center gap-4">
//                     {/* Buttons on the same row */}
//                     <div className="flex items-center gap-4 w-full">
//                         <input
//                             type="text"
//                             placeholder="Type here..."
//                             value={search}
//                             onChange={(e) => setSearch(e.target.value)}
//                             className="bg-transparent border border-cyan-400 rounded-md px-4 py-2 w-[200px] focus:outline-none text-cyan-100 placeholder:text-cyan-600"
//                         />
//                         <button className="border border-cyan-400 text-cyan-300 px-4 py-2 rounded-md hover:bg-cyan-400/10 transition">
//                             Confirm
//                         </button>
//                     </div>

//                     {/* Phone number list */}
//                     <div className="flex flex-col gap-3 w-full max-w-[240px] mt-4 overflow-y-auto max-h-[250px] border border-cyan-400/50 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition">
//                         {filteredList.length > 0 ? (
//                             filteredList.map((item) => (
//                                 <div
//                                     key={item.id}
//                                     className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/20 transition"
//                                 >
//                                     <Image
//                                         src={item.flag}
//                                         alt="flag"
//                                         width={22}
//                                         height={22}
//                                         className="rounded-sm"
//                                     />
//                                     <span className="text-sm">
//                                         {item.code} **********
//                                     </span>
//                                 </div>
//                             ))
//                         ) : (
//                             <p className="text-gray-400 text-sm text-center">
//                                 No numbers yet
//                             </p>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* === Footer === */}
//             <Footer />
//         </div>
//     );
// };

// export default PhoneManager;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import NavBar from "./NavBar";  // Assuming you have a NavBar component
// import Footer from "./Footer";  // Assuming you have a Footer component

// const countryData = [
//     { code: "+1", flag: "https://flagcdn.com/us.svg" },
//     { code: "+44", flag: "https://flagcdn.com/gb.svg" },
//     { code: "+880", flag: "https://flagcdn.com/bd.svg" },
//     { code: "+91", flag: "https://flagcdn.com/in.svg" },
//     { code: "+81", flag: "https://flagcdn.com/jp.svg" },
//     { code: "+61", flag: "https://flagcdn.com/au.svg" },
// ];

// type PhoneItem = {
//     id: number;
//     code: string;
//     flag: string;
//     number: string;
// };

// const PhoneManager: React.FC = () => {
//     const [generatedNumber, setGeneratedNumber] = useState<string>("");
//     const [generatedFlag, setGeneratedFlag] = useState<string>("");
//     const [phoneList, setPhoneList] = useState<PhoneItem[]>([]);
//     const [search, setSearch] = useState<string>("");

//     // Generate random number
//     const handleGenerate = () => {
//         const randomCountry =
//             countryData[Math.floor(Math.random() * countryData.length)];
//         const randomNum = Math.floor(100000000 + Math.random() * 900000000);
//         setGeneratedNumber(`${randomCountry.code}${randomNum}`);
//         setGeneratedFlag(randomCountry.flag);
//     };

//     // Confirm number
//     const handleConfirm = () => {
//         if (!generatedNumber) return;
//         const newItem: PhoneItem = {
//             id: Date.now(),
//             code: generatedNumber.slice(0, 4),
//             flag: generatedFlag,
//             number: generatedNumber,
//         };
//         setPhoneList((prev) => [...prev, newItem]);
//         setGeneratedNumber("");
//     };

//     // Search filter
//     const filteredList = phoneList.filter((item) =>
//         item.number.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#020617] to-[#0f172a] text-white">
//             {/* === Navbar === */}
//             <NavBar />

//             {/* === Main Content === */}
//             <div className="w-10/12 mx-auto mt-6 grid md:grid-cols-3 gap-10 px-6 py-10 rounded-2xl backdrop-blur-xl bg-white/5 shadow-2xl border border-white/10 flex-grow">
//                 {/* === Left Column === */}
//                 <div className="flex flex-col items-center justify-center gap-4">
//                     <button
//                         onClick={handleGenerate}
//                         className="w-full border border-cyan-400 text-cyan-300 py-2 rounded-md hover:bg-cyan-400/10 transition"
//                     >
//                         Generate
//                     </button>

//                     {/* Phone Number Input */}
//                     <div className="relative w-full">
//                         <input
//                             type="text"
//                             placeholder="+880....."
//                             value={generatedNumber}
//                             readOnly
//                             className="w-full bg-transparent border border-cyan-400 text-center py-2 rounded-md focus:outline-none text-cyan-100 placeholder:text-cyan-600"
//                         />
//                     </div>

//                     <button
//                         onClick={handleConfirm}
//                         className="w-full border border-cyan-400 text-cyan-300 py-2 rounded-md hover:bg-cyan-400/10 transition"
//                     >
//                         Confirm
//                     </button>
//                 </div>

//                 {/* === Middle Column === */}
//                 <div className="flex flex-col items-center justify-center gap-4 w-full">
//                     {/* Buttons on the same row with the same width */}
//                     <div className="flex items-center gap-4 w-full">
//                         <input
//                             type="text"
//                             placeholder="Type here..."
//                             value={search}
//                             onChange={(e) => setSearch(e.target.value)}
//                             className="w-full bg-transparent border border-cyan-400 rounded-md px-4 py-2 focus:outline-none text-cyan-100 placeholder:text-cyan-600"
//                         />
//                         <button className="w-full border border-cyan-400 text-cyan-300 px-4 py-2 rounded-md hover:bg-cyan-400/10 transition">
//                             Confirm
//                         </button>
//                     </div>

//                     {/* Phone number list */}
//                     <div className="flex flex-col gap-3 w-full max-w-[240px] mt-4 overflow-y-auto max-h-[250px] border border-cyan-400/50 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition">
//                         {filteredList.length > 0 ? (
//                             filteredList.map((item) => (
//                                 <div
//                                     key={item.id}
//                                     className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/20 transition"
//                                 >
//                                     <Image
//                                         src={item.flag}
//                                         alt="flag"
//                                         width={22}
//                                         height={22}
//                                         className="rounded-sm"
//                                     />
//                                     <span className="text-sm">
//                                         {item.code} **********
//                                     </span>
//                                 </div>
//                             ))
//                         ) : (
//                             <p className="text-gray-400 text-sm text-center">
//                                 No numbers yet
//                             </p>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* === Footer === */}
//             <Footer />
//         </div>
//     );
// };

// export default PhoneManager;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavBar from "./NavBar";  // Assuming you have a NavBar component
import Footer from "./Footer";  // Assuming you have a Footer component

const countryData = [
    { code: "+1", flag: "https://flagcdn.com/us.svg" },
    { code: "+44", flag: "https://flagcdn.com/gb.svg" },
    { code: "+880", flag: "https://flagcdn.com/bd.svg" },
    { code: "+91", flag: "https://flagcdn.com/in.svg" },
    { code: "+81", flag: "https://flagcdn.com/jp.svg" },
    { code: "+61", flag: "https://flagcdn.com/au.svg" },
];

type PhoneItem = {
    id: number;
    code: string;
    flag: string;
    number: string;
};

const PhoneManager: React.FC = () => {
    const [generatedNumber, setGeneratedNumber] = useState<string>("");
    const [generatedFlag, setGeneratedFlag] = useState<string>("");
    const [phoneList, setPhoneList] = useState<PhoneItem[]>([]);
    const [search, setSearch] = useState<string>("");

    // Generate random number
    const handleGenerate = () => {
        const randomCountry =
            countryData[Math.floor(Math.random() * countryData.length)];
        const randomNum = Math.floor(100000000 + Math.random() * 900000000);
        setGeneratedNumber(`${randomCountry.code}${randomNum}`);
        setGeneratedFlag(randomCountry.flag);
    };

    // Confirm number
    const handleConfirm = () => {
        if (!generatedNumber) return;
        const newItem: PhoneItem = {
            id: Date.now(),
            code: generatedNumber.slice(0, 4),
            flag: generatedFlag,
            number: generatedNumber,
        };
        setPhoneList((prev) => [...prev, newItem]);
        setGeneratedNumber("");
    };

    // Search filter
    const filteredList = phoneList.filter((item) =>
        item.number.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#020617] to-[#0f172a] text-white">
            {/* === Navbar === */}
            <NavBar />

            {/* === Main Content === */}
            <div className="w-10/12 mx-auto mt-6 grid md:grid-cols-3 gap-10 px-6 py-10 rounded-2xl backdrop-blur-xl bg-white/5 shadow-2xl border border-white/10 flex-grow">
                {/* === Left Column === */}
                <div className="flex flex-col items-center  gap-4">
                    <button
                        onClick={handleGenerate}
                        className="w-full border border-cyan-400 text-cyan-300 py-2 rounded-md hover:bg-cyan-400/10 transition"
                    >
                        Generate
                    </button>

                    {/* Phone Number Input */}
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="+880....."
                            value={generatedNumber}
                            readOnly
                            className="w-full bg-transparent border border-cyan-400 text-center py-2 rounded-md focus:outline-none text-cyan-100 placeholder:text-cyan-600"
                        />
                    </div>

                    <button
                        onClick={handleConfirm}
                        className="w-full border border-cyan-400 text-cyan-300 py-2 rounded-md hover:bg-cyan-400/10 transition"
                    >
                        Confirm
                    </button>
                </div>

                {/* === Middle Column === */}
                <div className="flex flex-col items-center  gap-4 w-full">
                    {/* Buttons on the same row with the same width */}
                    <div className="flex items-center gap-4 w-full">
                        <input
                            type="text"
                            placeholder="Type here..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-transparent border border-cyan-400 rounded-md px-4 py-2 focus:outline-none text-cyan-100 placeholder:text-cyan-600"
                        />
                        <button className="w-full border border-cyan-400 text-cyan-300 px-4 py-2 rounded-md hover:bg-cyan-400/10 transition">
                            Confirm
                        </button>
                    </div>

                    {/* Phone number list */}
                    <div className="flex flex-col gap-3 w-full mt-4 overflow-y-auto max-h-[250px] border border-cyan-400/50 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition">
                        {filteredList.length > 0 ? (
                            filteredList.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/20 transition"
                                >
                                    <Image
                                        src={item.flag}
                                        alt="flag"
                                        width={22}
                                        height={22}
                                        className="rounded-sm"
                                    />
                                    <span className="text-sm">
                                        {item.code} **********
                                    </span>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400 text-sm text-center">
                                No numbers yet
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* === Footer === */}
            <Footer />
        </div>
    );
};

export default PhoneManager;



