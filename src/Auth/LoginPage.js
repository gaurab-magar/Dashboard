import React from "react";
import { Link } from 'react-router-dom'
import { FaUserAlt, FaLock } from "react-icons/fa";
import InputField from "../components/shared/InputField";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Welcome Back
        </h2>
        <form>
          <InputField type='text' label={Username} placeholder='Enter Your Username' icon={FaUserAlt} value={FormData.Username} onChange={handleChange} name='username' />
  
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-2 py-1 text-gray-700 outline-none border-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm mt-4">
          Don't have an account? <Link to='/register' className="text-blue-600 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
