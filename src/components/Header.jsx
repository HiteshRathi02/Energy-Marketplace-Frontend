import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    let navigate = useNavigate();
  return (
    <div className=" bg-gray-900 text-gray-100">
      <header className="bg-gray-800 py-4 px-6 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <svg
              className="h-8 w-8 text-green-500 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="currentColor"
                fillOpacity="0.3"
              />
              <path
                d="M7 13L9.5 15.5L17 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              <button onClick={() => navigate("/",{replace:true})}>EnergyPeer</button>  
            </span>
          </div>

          {/* <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300 border-b-2 border-transparent hover:border-green-400 py-1"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300 border-b-2 border-transparent hover:border-green-400 py-1"
              >
                How It Works
              </a>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300 border-b-2 border-transparent hover:border-green-400 py-1"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300 border-b-2 border-transparent hover:border-green-400 py-1"
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-300 border-b-2 border-transparent hover:border-green-400 py-1"
              >
                Contact
              </a>
            </nav> */}

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            onClick={() => navigate("/login",{replace:true})}>
              Log In
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              onClick={() => navigate("/signup",{replace:true})}
            >
              Sign Up
            </button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Connect Wallet
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
