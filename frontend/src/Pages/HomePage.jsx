import { motion } from "framer-motion";
import { useAuthStore } from "../Store/AuthStore";
import { formatDate } from "../Utils/Date";
const HomePage = () => {
  const { user, logout } = useAuthStore();
  const handleLogout = () => {
    logout();
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="max-w-sm sm:w-full bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden bg-red-600 p-6" // Center on small screens, align right on medium screens and up
    >
      <h2 className="text-3xl font-bold mb-5 text-center bg-gradient-to-r from-slate-300 to-slate-200 text-transparent bg-clip-text">
        Dashboard
      </h2>
      <div className="space-y-6">
        <motion.div
          className="p-4 bg-gradient-to-r from-red-900 to-red-700 bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg border border-red-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-orange-400 mb-3">
            Profile Information
          </h3>
          <p className="text-slate-100">Name: {user.name} </p>
          <p className="text-slate-100">Email: {user.email} </p>
        </motion.div>
        <motion.div
          className="p-4 bg-gradient-to-r from-red-900 to-red-700 bg opacity-50 rounded-lg border border-red-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-orange-400 mb-3">
            Account Activity
          </h3>
          <p className="text-slate-200">
            <span className="font-medium">Joined: </span>
            {new Date(user.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              mmonth: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-slate-100">
            <span className="font-medium">Last Login: </span>
            {formatDate(user.lastLogin)}
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4"
      >
        <motion.button
          // whileHover={{ scale: 1.05 }}
          // whileTop={{ scale: 0.95 }}
          onClick={handleLogout}
          className="justify-center mx-auto flex w-48 py-2 bg-transparent hover:backdrop-blur-3xl rounded-lg  text-slate-50 placeholder-gray-600 duration-200 hover:border-b-4 cursor-pointer outline-none border-b-2 border-red-500"
        >
          Logout
        </motion.button>
      </motion.div>

      {/* <h2 className='text-3xl text-center font-bold text-white font-sans mb-6 '>Fruit Breakfast Cereal.</h2> */}
    </motion.div>
  );
};

export default HomePage;
