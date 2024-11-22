import React, { useState } from "react";

const LoginPage = () => {
  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for error and success messages
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      setSuccessMessage(""); // Clear success message
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      setSuccessMessage("");
      return;
    }

    // Clear errors and simulate a successful login
    setErrorMessage("");
    setSuccessMessage("Logged in successfully!");
  };

  // Utility function for email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full border-b border-black p-4">
        <h1 className="text-3xl font-roberto font-normal text-center">teach:able</h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="">
          <h2 className="text-3xl font-serif font-thin text-center -mt-40">Log in to Teachable</h2>

          {/* Display Error or Success Messages */}
          {errorMessage && (
            <div className="mb-4 text-sm text-red-600">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="mb-4 text-sm text-green-600">{successMessage}</div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email Address */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-normal text-gray-700 mt-10"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-3 pr-32 py-2 border border-gray-300 rounded-md"
              
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-normal text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md "
               
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className=" py-1.5 px-10 ml-24 mt-5 bg-black text-white rounded-md hover:bg-gray-800 focus:ring focus:ring-gray-500"
            >
              Log In
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-10 text-center text-sm text-gray-500">
            <a href="#" className="text-black underline decoration-solid">
              Forgot Password?
            </a>
            <div className="mt-7">
              Don't have an account?{" "}
              <a href="#" className="text-black underline decoration-solid">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
