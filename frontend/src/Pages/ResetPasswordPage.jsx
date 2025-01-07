import React, { useState } from 'react'
import {motion} from 'framer-motion';
import {Mail, Lock, Loader } from "lucide-react";
import { Link, useParams } from 'react-router-dom';
import  Input  from "../component/Input";
import { useAuthStore } from '../Store/AuthStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ResetPasswordPage = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const { resetPassword, isLoading, error, message } = useAuthStore();
  const {token} =useParams()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await resetPassword(token, password);
      toast.success("Password reset successfully, redirecting to login page...");
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Error resetting password");     
    }
  };

  return (
<motion.div initial={{ opacity: 0, y: 20}} animate={{ opacity: 1, y: 0}} transition={{ duration: 0.5}} className="max-w-sm sm:w-full bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden bg-red-600"  // Center on small screens, align right on medium screens and up
>
<div className="p-10">
        <h2 className='text-3xl font-bold mb-5 text-center bg-gradient-to-r from-slate-300 to-slate-200 text-transparent bg-clip-text'>
          Reset Password
        </h2>
        {error && <p className="text-orange-300 text-sm mb-4 text-center">{error}</p>}
        {message && <p className="text-slate-50 text-sm mb-4 text-center">{message}</p>}
        <form onSubmit={handleSubmit}>
          <Input 
          icon={Lock}
          type='password'
          placeholder='New Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}   
          required      
          />
          <Input
          icon={Lock}
          type='password'
          placeholder='Confirm New Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required        
          />
        
          {error && <p className='text-orange-400 font-semibold mb-2 pl-4'>{error}</p>}
          <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className='justify-center mx-auto flex w-48 py-2 bg-transparent shadow-xl hover:backdrop-blur-sm rounded-lg  text-slate-50 duration-200 hover:border-b-4 outline-none border-b-2'
          type = 'submit' disabled={isLoading}>
            {isLoading ? "Resetting..." : "Set New Password"}
          </motion.button>
        </form>
      </div>
</motion.div>
  )
}


export default ResetPasswordPage

