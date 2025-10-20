"use client";
import React, { useState } from "react";

import { Eye, EyeOff, Mail, User, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="mb-5">
        <h2 className="text-[#E6E6E6] text-center font-['inter'] lg:text-5xl/relaxed font-semibold">
          Sign Up
        </h2>
        <p className="text-[#C8CACC] font-['inter'] lg:text-2xl/normal font-medium text-center">
          It only takes a minute to create your account
        </p>
      </div>

      <form className="space-y-4">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <div>
            <label className="block text-sm mb-1 text-[#E6E6E6] font-['inter'] lg:text-[18px] font-medium">
              Full Name
            </label>
          </div>
          <div className="relative">
            <User className="absolute left-3 top-3 text-white" size={18} />
            <input
              type="text"
              name="fullName"
              required
              className="w-full pl-10 pr-3 py-2 border-[1px] border-[#0082F2] text-[#D2D2D2] font-['inter'] lg:text-[1rem] rounded-lg outline-none"
              placeholder="John Doe"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <div>
            <label className="block text-sm mb-1 text-[#E6E6E6] font-['inter'] lg:text-[18px] font-medium">
              Email
            </label>
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-white" size={18} />
            <input
              type="email"
              name="email"
              required
              className="w-full pl-10 pr-3 py-2 text-[#D2D2D2] font-['inter'] lg:text-[1rem] border-[1px] border-[#0082F2] rounded-lg outline-none"
              placeholder="example@email.com"
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <div>
            <label className="block text-sm  mb-1 text-[#E6E6E6] font-['inter'] lg:text-[18px] font-medium">
              Password
            </label>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-white" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="w-full pl-10 pr-10 py-2 text-[#D2D2D2] font-['inter'] lg:text-[1rem] border-[1px] border-[#0082F2] rounded-lg outline-none "
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-white cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full my-5 font-['inter'] text-sm font-semibold lg:text-[18px] bg-gradient-to-r from-[#2199FF] to-[#A7D6FF] text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center gap-2"
        >
          Sign Up
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-500"></div>
          <span className="px-3 text-[#AEAEAE] font-['inter'] text-sm lg:text-[1rem]">
            Or Continue With
          </span>
          <div className="flex-grow border-t border-gray-500"></div>
        </div>

        {/* Google Login */}
        <button
          type="button"
          className=" border p-4 rounded-full mx-auto flex items-center justify-center gap-2 bg-gray-50 transition duration-200"
        >
          <FcGoogle size={27} />
        </button>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-600 mt-3">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </a>

          <a
            href="/edit-profile"
            className="text-indigo-600 font-medium hover:underline"
          >
            Edit Profile
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
