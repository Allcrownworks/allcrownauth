import React, { useState } from 'react'
import {motion} from 'framer-motion';
import {Mail, Lock, Loader } from "lucide-react";
import { Link } from 'react-router-dom';
import  Input  from "../component/Input";
import { useAuthStore } from '../Store/AuthStore';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useAuthStore();
  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <motion.div initial={{ opacity: 0, y: 20}} animate={{ opacity: 1, y: 0}} transition={{ duration: 0.5}} className="max-w-sm sm:w-full bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden bg-red-600"  // Center on small screens, align right on medium screens and up
>
<div className="p-10">
        <h2 className='text-3xl font-bold mb-5 text-center bg-gradient-to-r from-slate-300 to-slate-200 text-transparent bg-clip-text'>
          Welcome Back
        </h2>
        <form onSubmit={handleLogin}>
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
          {/* password strength meter */}
          {/* <PasswordStrengthMeter password={password} /> */}
          <div className=""> <Link to="/forget-password" className='text-orange-300 hover:underline pl-4'>Forgot password?</Link></div>
          {error && <p className='text-orange-400 font-semibold mb-2 pl-4'>{error}</p>}
          <motion.button className='justify-center mx-auto flex w-48 py-2 bg-transparent shadow-xl hover:backdrop-blur-sm rounded-lg  text-slate-50 duration-200 hover:border-b-4 outline-none border-b-2'
          whileHover={{ scale: 1.02}} whileTap={{scale: 0.98}} type = 'submit' disabled={isLoading}>
            {isLoading ? <Loader className='w-6 h-6 animate-spin text-center' /> : "Login"}
          </motion.button>
        </form>
      </div>
     
      <div className="px-8 py-4 bg-opacity-45 flex justify-center bg-red-900">
        <p className='text-sm text-slate-100'>
          Don't have an account?
          <Link to="/signup" className='text-orange-300 hover:underline pl-4'>Sign up</Link>
        </p>
      </div>
</motion.div>
  )
}
export default LoginPage