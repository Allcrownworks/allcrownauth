import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../component/Input"; // Ensure Input component exists
import { useAuthStore } from "../Store/AuthStore"; // Ensure correct import path

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // Initialize as boolean
  const { isLoading, forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email); // Call the forgot password function
      setIsSubmitted(true); // Update submission state
    } catch (error) {
      console.error("Error sending reset link:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-sm sm:w-full bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden bg-red-600"
    >
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-5 text-center bg-gradient-to-r from-slate-300 to-slate-200 text-transparent bg-clip-text">
          Forgot Password
        </h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <p className="text-center text-slate-100 mb-4">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
            <Input
            className="bg-red-200"
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.button
              className="justify-center mx-auto flex w-48 py-2 bg-transparent hover:backdrop-blur-3xl rounded-lg text-slate-50 placeholder-gray-600 duration-200 hover:border-b-4 cursor-pointer outline-none border-b-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              // disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="w-6 h-6 animate-spin text-center" />
              ) : (
                "Send Reset Link"
              )}
            </motion.button>
          </form>
        ) : (
          <div className="text-center">
            <Mail className="text-white w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto p-3 " />
            <p className="text-slate-100">
              If an account exists for <strong className="text-orange-400">{email}</strong>, you will
              receive a password reset link shortly.
            </p>
          </div>
        )}
      </div>
      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <Link to="/login" className="text-orange-300 hover:underline pl-4 flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Login
        </Link>
      </div>
    </motion.div>
  );
};

export default ForgetPasswordPage;
