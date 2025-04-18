import React from "react";

function Footer() {
  return (
    <div className=" bg-gray-900 text-gray-100">
      <footer className="bg-gray-800 pt-4 pb-4 mt-auto">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-x-2 justify-items-end">
            <div className="col-start-1 col-end-2">
              <div className="flex items-center mb-4">
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
                  EnergyPeer
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Revolutionizing energy trading through peer-to-peer
                transactions. Join us in creating a sustainable energy future
                for communities worldwide.
              </p>
            </div>
            <div className="col-start-3">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <span className="material-symbols-outlined mr-2 text-green-500">
                    email
                  </span>
                  <a href="mailto:btech10687.21@bitmesra.ac.in">
                    btech10687.21@bitmesra.ac.in
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="material-symbols-outlined mr-2 text-green-500">
                    email
                  </span>
                  <a href="mailto:btech10139.21@bitmesra.ac.in">
                    btech10139.21@bitmesra.ac.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-4 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 EnergyPeer. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <p className="text-gray-400 mb-4 md:mb-0">
                {" "}
                Created and managed by Hitesh Rathi and Rahul Hembram
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
