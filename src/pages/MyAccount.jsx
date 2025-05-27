import { useState } from "react";


function MyAccount() {
  const [isSignup, setSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmpass] = useState('');
  const [error, setError] = useState(false);

  const handleSSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      if (!name.trim()) {
        setError(true);
        toast.error("Enter your name");
        return;
      } else {
        setError(false);
      }

      if (!confirmPassword) {
        toast.error("Enter confirm password");
        return;
      }

      if (password !== confirmPassword) {
        toast.error("Password didn't Match");
        return;
      }
    }

    if (!email || !password) {
      toast.error("Kindly enter email & password");
      return;
    }

    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(email)) {
      toast.error("Enter correct email");
      return;
    }

    if (password.length < 8) {
      toast.error("Invalid Password");
      return;
    }

    if (isSignup) {
      toast.success("Signup Successfully");
    } else {
      toast.success("Login Successfully");
    }

    setEmail('');
    setPassword('');
    setConfirmpass('');
    setName('');
  };

  return (
    <div className="boder border-white">
    <div className="min-h-screen flex flex-col justify-center items-center shadow-2xl">
      <h1 className="font-extrabold text-[40px]">Account Details</h1>
      <p className="text-[18px] text-white mt-2 mb-6">Home » My account</p>

      <div className="bg-black w-[400px] shadow-md rounded-lg p-8 mb-5">
        <h2 className="text-2xl text-white font-bold mb-1 text-center">
          {isSignup ? "Sign Up" : "Sign In"}
        </h2>
        <p className="text-sm text-white text-center mb-4">
          {isSignup ? "Create an Account" : "Sign in to continue shopping"}
        </p>

        <form onSubmit={handleSSubmit}>
          {isSignup && (
            <div className="mb-3">
              <label className="text-xs text-white ml-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`border text-sm w-full rounded h-10 px-3 mt-1 ${
                  error ? "border-red-600" : "border-white"
                }`}
              />
            </div>
          )}

          <div className="mb-3">
            <label className="text-xs text-white ml-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-white text-sm w-full rounded h-10 px-3 mt-1"
            />
          </div>

          <div className="mb-3">
            <label className="text-xs tex-white ml-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-white text-sm w-full rounded h-10 px-3 mt-1"
            />
          </div>

          {isSignup && (
            <div className="mb-3">
              <label className="text-xs text-white ml-1">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmpass(e.target.value)}
                required
                className="border border-white text-sm w-full rounded h-10 px-3 mt-1"
              />
            </div>
          )}

          {!isSignup && (
            <div className="flex justify-between items-center text-sm mt-2 mb-4">
              <label className="flex items-center gap-2 text-white cursor-pointer">
                <input type="checkbox" />
                Remember Me
              </label>
              <p className="text-white cursor-pointer">Forgot Password?</p>
            </div>
          )}

          <button
            type="submit"
            className="bg-black text-white border border-yellow-600 w-[200px] h-10  rounded-full mt-2 hover:bg-yellow-600 hover:text-black justify-center flex items-center mx-auto transition-colors duration-300"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-white">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span
            onClick={() => setSignup(!isSignup)}
            className="text-white font-bold ml-1 cursor-pointer"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default MyAccount;
