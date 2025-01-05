import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";

const NavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out.");
      navigate("/");
      // Redirect to login page or perform additional actions after logout
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("User is signed in:", currentUser);
        setUser(currentUser); // Set the user object if signed in
      } else {
        console.log("No user is signed in.");
        setUser(null); // Set user to null if signed out
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <>
      <nav className="flex justify-between p-8 bg-[#7064e5] text-[#fff] shadow-xl shadow-gray-100">
        <section className="text-xl font-bold">
          <Link to={"/"}>BusyBuy</Link>
        </section>
        <ul className="flex gap-5">
          <Link to="/">
            <li className="text-xl font-semibold">Home</li>
          </Link>

          {user && (
            <Link to="/cart">
              <li className="text-xl font-semibold">Cart</li>
            </Link>
          )}
          {user && (
            <Link to="/orders">
              <li className="text-xl font-semibold">Order</li>
            </Link>
          )}
          {!user && (
            <Link to="/signIn">
              <li className="text-xl font-semibold">SignIn</li>
            </Link>
          )}
          {user && (
            <li
              className="text-xl font-semibold cursor-pointer"
              onClick={() => {
                handleLogOut();
              }}
            >
              Signout
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
