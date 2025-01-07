import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FloatingShape from "./component/FloatingShape";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import EmailVerificationPage from "./Pages/EmailVerificationPage";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./Store/AuthStore";
import { useEffect } from "react";
import LoadingSpinner from "./component/LoadingSpinner";
import ForgetPasswordPage from "./Pages/ForgetPasswordPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
// import SmokeEffect from "./component/Smoke";
// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  // if(!user.isVerified){
  //   return <Navigate to="/verify-email" replace />;
  // }
  return children;
};
// redirect authenticated users to the home page

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    // If authenticated, redirect to the home page
    return <Navigate to="/" replace />;
  }

  return children; // Render the children (e.g., <Signup />) if not authenticated
};

const App = () => {
  const { isCheckingAuth, checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div
      className="min-h-screen items-center justify-center relative overflow-hidden flex"
      style={{
        backgroundImage: `url('/Designer 2.jpeg')`, // Add your image path here
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
      }}
    >
      {/* <SmokeEffect /> */}
      <FloatingShape
        color="bg-red-100"
        size="w-40 h-10"
        top="5%"
        left="30%"
        delay={2}
      />
      <FloatingShape
        color="bg-slate-50"
        size="w-32 h-32"
        top="1%"
        right="50%"
        delay={5}
      />
      <FloatingShape
        color="bg-lime-500"
        size="w-32 h-32"
        top="50%"
        left="30%"
        delay={1}
      />
      <FloatingShape
        color="bg-cyan-500"
        size="w-32 h-32"
        top="15%"
        left="60%"
        delay={1}
      />
      <FloatingShape
        color="bg-blue-500"
        size="w-32 h-32"
        top="50%"
        left="50%"
        delay={1}
      />

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" 
          element={
        <EmailVerificationPage />
        } />
        <Route
          path="/forget-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgetPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="*"
          element={
              <Navigate to="/" replace/>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
