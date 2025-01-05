import React from "react";
import { auth } from "../firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(e);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    register(email, password);
  };

  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential) {
        const loginCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        navigate("/");
      }
    } catch (error) {
      alert("User Registration Failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Sign Up
        </h2>
        <form
          onSubmit={(e) => {
            handleSignUp(e);
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              required
              type="text"
              id="name"
              placeholder="Enter Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              required
              type="password"
              id="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-lg text-white font-semibold bg-[#7064e5] hover:bg-[#5d4ed1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7064e5]"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
