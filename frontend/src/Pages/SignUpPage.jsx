import React, { useState } from 'react'
import {motion} from 'framer-motion';
import { User, Mail, Lock, Loader} from "lucide-react";
import  Input  from "../component/Input";
import { Link, useNavigate } from 'react-router-dom';
import PasswordStrengthMeter from '../component/PasswordStrengthMeter';
import { useAuthStore } from '../Store/AuthStore';
const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword ] = useState("");
  const navigate = useNavigate();
  const { signup, error, isLoading } = useAuthStore();
  const handleSignUp = async(e) => {
    e.preventDefault();
    try {
      await signup(email, password, name); //await was deletet before  //signup(email, password, name);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="max-w-sm sm:w-full bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden bg-red-600 "  // Center on small screens, align right on medium screens and up
>
      <div className="p-10">
        <h2 className='text-3xl font-bold mb-5 text-center bg-gradient-to-r from-slate-300 to-slate-200 text-transparent bg-clip-text'>
          Create Account
        </h2>
        <form onSubmit={handleSignUp}>
          <Input
          icon={User}
          type='text'
          placeholder='Full Name'
          value={name}
          onChange={(e) => setName(e.target.value)}         
          />
          <Input
          icon={Mail}
          type='email'
          placeholder='Your Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}         
          />
          <Input
          icon={Lock}
          type='password'
          placeholder='Your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}         
          />
          {error && <p className='text-red-500 font-bold mt-2'>{error}</p>}
          {/* password strength meter */}
          <PasswordStrengthMeter password={password} />
          <motion.button className='justify-center mx-auto flex w-48 py-2 bg-transparent hover:backdrop-blur-3xl rounded-lg  text-slate-50 placeholder-gray-600 duration-200 hover:border-b-4 cursor-pointer outline-none border-b-2'whileHover={{ scale: 1.02}} whileTap={{scale: 0.98}} type = 'submit' disable={isLoading}>
            {isLoading ? <Loader className="animate-spin mx-auto" size={24} /> : "Sign Up"}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-opacity-45 flex justify-center bg-orange-800">
        <p className='text-sm text-slate-100'>
          Already have an account?
          <Link to="/login" className='text-orange-400 hover:underline pl-4'>Login</Link>
        </p>
      </div>
      
      </motion.div>
  )
}

export default SignUpPage