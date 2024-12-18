"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in by looking for a token in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // If token exists, user is logged in
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsLoggedIn(false); // Update login state
    router.push("/"); // Redirect to home page
  };

  return (
    <nav className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <div>
        <a href="/" className="text-xl font-bold">
          Bug Tracker
        </a>
      </div>
      <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <Link href={"/dashboard"}>
              <button className="bg-blue-700 hover:bg-blue-400 text-white px-4 py-2 rounded">
                Dashboard
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <a
              href="/auth/signup"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Signup
            </a>
            <a
              href="/auth/login"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Login
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
