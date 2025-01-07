import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 via-orange-600 to-red-800 flex items-center justify-center relative overflow-hidden">
        {/* simple loading spinner */}
        <motion.div className="w-16 h-16 border-4 border-t-4 border-t-orange-400 border-orange-200 rounded-full"
        animate={{ rotate:360}} 
        transition= {{ duration: 1, repeat: Infinity, ease: "linear"}}       
        />
    </div>
  );
};

export default LoadingSpinner;