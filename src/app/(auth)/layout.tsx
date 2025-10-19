// app/(auth)/layout.tsx
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" p-8 rounded-2xl shadow-lg w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
