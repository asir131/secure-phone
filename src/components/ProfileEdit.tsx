


"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, User, Lock, Camera } from "lucide-react";
import people from "@/assets/people.png"

const ProfileEdit = () => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [profileImage, setProfileImage] = useState("/default-avatar.png"); 

    // Handle image change
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen px-4">
            <div className="w-full max-w-md bg-[#1C1C1C] p-8 rounded-2xl shadow-lg border border-[#2f2f2f]">
                {/* Header */}
                <div>
                    <h2 className="text-3xl font-semibold text-[#E6E6E6] text-center mb-2 font-['inter']">
                        Edit Profile
                    </h2>
                    <p className="text-center text-[#C8CACC] mb-6 font-['inter'] text-[16px]">
                        Update your information and password below
                    </p>
                </div>

                {/* Profile Image Section */}
                <div className="flex justify-center mb-8 relative">
                    <div className="relative w-28 h-28">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-28 h-28 rounded-full object-cover border-2 border-[#0082F2]"
                        />
                        <label
                            htmlFor="profile-upload"
                            className="absolute bottom-0 right-0 bg-[#0082F2] hover:bg-[#006fd6] text-white p-2 rounded-full cursor-pointer shadow-lg transition-all duration-200"
                        >
                            <Camera size={18} />
                            <input
                                id="profile-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </label>
                    </div>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-[#E6E6E6] font-['inter'] lg:text-[18px] font-medium">
                            Full Name
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-white" size={18} />
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full pl-10 pr-3 py-2 border-[1px] border-[#0082F2] text-[#D2D2D2] font-['inter'] lg:text-[1rem] rounded-lg outline-none bg-[#2a2a2a]"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-[#E6E6E6] font-['inter'] lg:text-[18px] font-medium">
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-white" size={18} />
                            <input
                                type="email"
                                placeholder="example@email.com"
                                className="w-full pl-10 pr-3 py-2 border-[1px] border-[#0082F2] text-[#D2D2D2] font-['inter'] lg:text-[1rem] rounded-lg outline-none bg-[#2a2a2a]"
                            />
                        </div>
                    </div>

                    {/* Old Password */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-[#E6E6E6] font-['inter'] lg:text-[18px] font-medium">
                            Old Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-white" size={18} />
                            <input
                                type={showOldPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-10 py-2 border-[1px] border-[#0082F2] text-[#D2D2D2] font-['inter'] lg:text-[1rem] rounded-lg outline-none bg-[#2a2a2a]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowOldPassword(!showOldPassword)}
                                className="absolute right-3 top-2.5 text-white cursor-pointer"
                            >
                                {showOldPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* New Password */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-[#E6E6E6] font-['inter'] lg:text-[18px] font-medium">
                            New Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-white" size={18} />
                            <input
                                type={showNewPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-10 py-2 border-[1px] border-[#0082F2] text-[#D2D2D2] font-['inter'] lg:text-[1rem] rounded-lg outline-none bg-[#2a2a2a]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute right-3 top-2.5 text-white cursor-pointer"
                            >
                                {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between items-center pt-4">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#2199FF] to-[#A7D6FF] hover:opacity-90 text-white py-2 px-6 rounded-lg font-semibold font-['inter'] transition-all duration-200"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-6 rounded-lg font-semibold font-['inter'] transition-all duration-200"
                        >
                            Change
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileEdit;
