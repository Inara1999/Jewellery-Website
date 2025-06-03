import React, { useEffect, useState } from "react";
import { postWithoutToken } from "../api/fetch";
import { endPoint } from "../utilis/url";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const MyAccount = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (storedToken && user?.role) {
      navigate(user.role === "user" ? "/profile" : "/admin");
    }
  }, []);

  const validateForm = () => {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      toast.error("Email and password are required");
      return false;
    }

    if (!emailReg.test(email)) {
      toast.error("Invalid email format");
      return false;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return false;
    }

    if (isSignup) {
      if (!name.trim()) {
        toast.error("Name is required");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const data = isSignup ? { name, email, password } : { email, password };
      const url = isSignup ? endPoint.register : endPoint.login;

      const res = await postWithoutToken(url, data);
      localStorage.setItem("token", res.accessToken);
      localStorage.setItem("user", JSON.stringify(res.content));

    
      toast.success(`${isSignup ? "Signup" : "Login"} successful`);

      navigate(res.content.role === "user" ? "/profile" : "/admin");
    } catch (err) {
      const msg = isSignup ? "Registration failed" : "Login failed";
      setError(msg);
      toast.error(`${msg}. Please try again.`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="font-extrabold text-[40px] text-white mb-1">Account Details</h1>
      <p className="text-[18px] text-gray-300 mb-6">Home » My account</p>

      <div className="bg-[#111111c4] w-[400px] shadow-md rounded-lg p-8 mb-5">
        <h2 className="text-2xl text-white font-bold mb-1 text-center">
          {isSignup ? "Sign Up" : "Sign In"}
        </h2>
        <p className="text-sm text-gray-300 text-center mb-4">
          {isSignup ? "Create an Account" : "Sign in to continue shopping"}
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="mb-4">
              <label className="text-xs text-white ml-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-white text-sm w-full rounded h-10 px-3 mt-1 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="text-xs text-white ml-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-white text-sm w-full rounded h-10 px-3 mt-1 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>

          <div className="mb-4">
            <label className="text-xs text-white ml-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-white text-sm w-full rounded h-10 px-3 mt-1 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>


          {!isSignup && (
            <div className="flex justify-between items-center text-sm mt-2 mb-4 text-white">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" />
                Remember Me
              </label>
              <p className="cursor-pointer hover:underline">Forgot Password?</p>
            </div>
          )}

          <button
            type="submit"
            className="bg-[#111111c4] text-white border border-yellow-600  w-full h-10 rounded-full mt-2 hover:bg-yellow-600 hover:text-black transition-colors duration-300 flex justify-center items-center"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-white">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span
            onClick={() => setIsSignup(!isSignup)}
            className="text-yellow-600 font-bold ml-1 cursor-pointer hover:underline"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyAccount;
