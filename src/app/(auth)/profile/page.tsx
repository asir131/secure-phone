

"use client";
import React from "react";
import Image from "next/image";
import people from "@/assets/people.png"; // 🧑 default image from assets
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();

  // later you can replace these with actual user data from backend or Firebase
  const name = "John Doe";
  const email = "john.doe@email.com";

  const handleEditClick = () => {
    router.push("/edit-profile");
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-3">
      {/* Profile Image */}
      <div className="relative">
        <Image
          src={people}
          alt="Profile"
          width={130}
          height={130}
          className="rounded-full border-2 border-[#2199FF] object-cover"
        />
      </div>

      {/* User Info */}
      <div>
        <h2 className="text-white text-3xl font-semibold font-['inter']">
          {name}
        </h2>
        <p className="text-[#7C7C7C] text-[1.25rem] font-['inter']">{email}</p>
      </div>

      {/* Edit Button */}
      <button
        onClick={handleEditClick}
        className="mt-4 bg-gradient-to-r from-[#2199FF] to-[#A7D6FF] text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-200"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default Profile;
