import { Mail, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ForgetPassword = () => {
    return (
        <div className=''>
            <div className='mb-8'>
                <h2 className='text-[#E6E6E6] font-["inter"] lg:text-5xl/normal font-semibold text-center'>Forgot Password?</h2>
                <p className='text-[#C8CACC] lg:text-lg/normal font-["inter"] text-center'>Don't worry! Enter your registered Email <br /> or Phone Number</p>
            </div>

            <form>
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                    <div>
                        <label className="block text-sm mb-1 text-[#E6E6E6] font-['inter'] lg:text-[18px] font-medium">
                            Enter your Email or Number
                        </label>
                    </div>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 text-white" size={18} />
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full pl-10 pr-3 py-2 border-[1px] border-[#0082F2] text-[#D2D2D2] font-['inter'] lg:text-[1rem] rounded-lg outline-none"
                            placeholder="example@email.com"
                        />
                    </div>
                </div>

                {/* reset code  */}
                <Link href="/resetcode"
                    type="submit"
                    className="w-full my-5 font-['inter'] text-sm font-semibold lg:text-[18px] bg-gradient-to-r from-[#2199FF] to-[#A7D6FF] text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center gap-2"
                >
                    Send Reset Code
                </Link>
            </form>
        </div>
    );
};

export default ForgetPassword;