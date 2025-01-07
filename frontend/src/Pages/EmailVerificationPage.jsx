  import {motion} from "framer-motion";
import {Loader } from "lucide-react";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../Store/AuthStore";
import toast from "react-hot-toast";
 const EmailVerificationPage = () => {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const {error, isLoading, verifyEmail} =useAuthStore();
    const handleChange = (index, value) => {
        const newCode = [...code];
        // Handle posted content
        if(value.length > 1) {
            const pastedCode = value.slice(0, 6).split("");
            for (let i =0; i < 6; i++) {
                newCode[i] = pastedCode[i] || "";
            }
            setCode(newCode);
            // Focus on the last non-empty input or the first empty one
            const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
            const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
            inputRefs.current[focusIndex].focus();
        } else {
            newCode[index] = value;
            setCode(newCode);
            // Move focus to the next input field if value is entered
            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }

        }
    };
    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        const verificationCode = code.join('');
        try{
            await verifyEmail(verificationCode);
            navigate("/");
            toast.success("Email verified successfully");
        }catch(error){
            console.log(error);          
        }
    };
    // Auto submit when all field are filled
    useEffect(() => {
        if(code.every(digit => digit !== '')) {
            handleSubmit(new Event('submit'));
        }
    },[code])
  return (
    <motion.div initial={{ opacity: 0, y: 20}} animate={{ opacity: 1, y: 0}} transition={{ duration: 0.5}} className="max-w-sm sm:w-full bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden bg-red-600" >
        <div className="p-10">
        <h2 className='text-3xl font-bold mb-5 text-center bg-gradient-to-r from-slate-300 to-slate-200 text-transparent bg-clip-text'>
          Verify Your Email
        </h2>
        <p className="text-center mb-6 text-orange-300">Enter the 6-digit code sent to your email address</p>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-between">
                {code.map((digit, index) => (
                    <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type='text'
                    maxLength="6"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-2xl font-bold bg-red-500 bg-opacity-20 backdrop-filter backdrop-blur-sm text-white border-2 border-gray-200 rounded-lg focus:border-orange-300 focus:outline-none" />
                ))}
            </div>
            {error && <p className='text-orange-300 text-center font-semibold mt-2'>{error}</p>}
            <motion.button className='justify-center mx-auto flex w-48 py-2 bg-transparent hover:backdrop-blur-3xl rounded-lg  text-slate-50 placeholder-gray-600 duration-200 hover:border-b-4 cursor-pointer outline-none border-b-2'whileHover={{ scale: 1.02}} whileTap={{scale: 0.98}} type = 'submit' disabled={isLoading}>
            {isLoading ? <Loader className='w-6 h-6 animate-spin text-center' /> : "Verify Email"}
          </motion.button>
        </form>
        </div>
    </motion.div>
  )
}

export default EmailVerificationPage
