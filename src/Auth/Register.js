import React from "react";
import { Link } from 'react-router-dom';
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Create an Account
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2" htmlFor="fullname">
              Full Name
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaUserAlt className="text-gray-500" />
              <input
                type="text"
                id="fullname"
                placeholder="Enter your full name"
                className="w-full px-2 py-1 text-gray-700 outline-none border-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaEnvelope className="text-gray-500" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-2 py-1 text-gray-700 outline-none border-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2" htmlFor="username">
              Username
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaUserAlt className="text-gray-500" />
              <input
                type="text"
                id="username"
                placeholder="Choose a username"
                className="w-full px-2 py-1 text-gray-700 outline-none border-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                className="w-full px-2 py-1 text-gray-700 outline-none border-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm mt-4">
          Already have an account? <Link to='/login' className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
