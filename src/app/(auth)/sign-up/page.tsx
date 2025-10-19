// "use client";
// import React, { useState } from "react";

// import { Eye, EyeOff, Mail, User, Lock, LogIn } from "lucide-react";
// import { FcGoogle } from "react-icons/fc";

// const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   return (
//     <div>
//       <h2 className="text-[#E6E6E6] text-center font-['inter'] text-5xl/relaxed font-semibold">
//         Sign Up
//       </h2>
//       <p className="text-[#C8CACC] font-['inter'] text-2xl/relaxed font-medium text-center">
//         It only takes a minute to create your account
//       </p>

//       <form className="space-y-6">
//         {/* Full Name */}
//         <div className="flex flex-col gap-3">
//           <div>
//             <label className="block text-sm font-medium mb-1 text-white">
//               Full Name
//             </label>
//           </div>
//           <div className="relative">
//             <User className="absolute left-3 top-3 text-white" size={18} />
//             <input
//               type="text"
//               name="fullName"
//               required
//               className="w-full pl-10 pr-3 py-2 border text-white rounded-lg outline-none focus:ring-2"
//               placeholder="John Doe"
//             />
//           </div>
//         </div>

//         {/* Email */}
//         <div className="flex flex-col gap-3">
//           <div>
//             <label className="block text-sm font-medium mb-1 text-white">
//               Email
//             </label>
//           </div>
//           <div className="relative">
//             <Mail className="absolute left-3 top-3 text-white" size={18} />
//             <input
//               type="email"
//               name="email"
//               required
//               className="w-full pl-10 pr-3 py-2 text-white border rounded-lg outline-none focus:ring-2"
//               placeholder="example@email.com"
//             />
//           </div>
//         </div>

//         {/* Password */}
//         <div className="flex flex-col gap-3">
//           <div>
//             <label className="block text-sm font-medium mb-1 text-white">
//               Password
//             </label>
//           </div>
//           <div className="relative">
//             <Lock className="absolute left-3 top-3 text-white" size={18} />
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               required
//               className="w-full pl-10 pr-10 py-2 text-white border rounded-lg outline-none focus:ring-2"
//               placeholder="••••••••"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-2.5 text-white cursor-pointer"
//             >
//               {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//             </button>
//           </div>
//         </div>

//         {/* Sign Up Button */}
//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-200 flex items-center justify-center gap-2"
//         >
//           <LogIn size={18} />
//           Sign Up
//         </button>

//         <div className="flex items-center my-4">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="px-3 text-gray-500 text-sm font-medium">
//             Or Continue With
//           </span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google Login */}
//         <button
//           type="button"
//           className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 bg-gray-50 transition duration-200"
//         >
//           <FcGoogle size={20} />
//           Continue with Google
//         </button>

//         {/* Login Redirect */}
//         <p className="text-center text-sm text-gray-600 mt-3">
//           Already have an account?{" "}
//           <a
//             href="/login"
//             className="text-indigo-600 font-medium hover:underline"
//           >
//             Login
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

import SignUpForm from "@/components/SignUpForm";
import React from "react";

const SignUp = () => {
  return (
    <div>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignUp;
