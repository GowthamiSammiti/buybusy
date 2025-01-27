import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";

const SignIn = () => {
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(e);
    const email = e.target.email.value;
    const password = e.target.password.value;
    verify(email, password);
  };

  const verify = async (email, password) => {
    try {
      const loginCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
    } catch (error) {
      alert("User signIn Failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Sign In
        </h2>
        <form
          onSubmit={(e) => {
            handleSignIn(e);
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
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
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          <Link
            to="/signUp"
            className="text-[#7064e5] hover:underline font-semibold"
          >
            SignUp instead
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
