import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
    let navigate = useNavigate();
  return (
    <div className=" bg-gray-900 text-gray-100">
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                  Trade Clean Energy
                </span>{" "}
                Directly With Your Community
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8">
                Join the decentralized energy revolution. Buy and sell renewable
                energy peer-to-peer, cutting out the middleman and supporting
                local green initiatives.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={() => navigate("/signup",{replace:true})}>
                  Get Started
                </button>
                <button className="px-8 py-3 rounded-lg border-2 border-green-500 hover:bg-gray-800 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                  <a href="https://dr.ntu.edu.sg/bitstream/10356/139944/2/final_thesis.pdf" target="_blank">Learn More</a>
                </button>
              </div>

              <div className="mt-10 flex items-center">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-green-500 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">
                      person
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-emerald-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">
                      person
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-teal-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">
                      person
                    </span>
                  </div>
                </div>
                <p className="ml-4 text-gray-300">
                  <span className="text-green-400 font-bold">2,500+</span> users
                  already trading energy
                </p>
              </div>
            </div>

            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="relative">
                <div className="w-full h-full absolute -right-4 -bottom-4 bg-green-500 rounded-lg opacity-30 blur-lg"></div>
                <div className="relative bg-gray-800 rounded-lg p-6 shadow-2xl overflow-hidden border border-gray-700">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-green-500 opacity-10 rounded-full -mt-20 -mr-20"></div>

                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">
                      Energy Trading Platform
                    </h2>
                    <div className="flex space-x-2">
                      <span className="h-3 w-3 bg-red-500 rounded-full"></span>
                      <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
                      <span className="h-3 w-3 bg-green-500 rounded-full"></span>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Available Energy</span>
                      <span className="text-green-400 font-bold">25.7 kWh</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 cursor-pointer transform hover:scale-105">
                      <div className="flex items-center mb-2">
                        <span className="material-symbols-outlined text-green-500 mr-2">
                          bolt
                        </span>
                        <span>Buy Energy</span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Current rate: $0.12/kWh
                      </p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 cursor-pointer transform hover:scale-105">
                      <div className="flex items-center mb-2">
                        <span className="material-symbols-outlined text-emerald-500 mr-2">
                          sell
                        </span>
                        <span>Sell Energy</span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Your rate: $0.15/kWh
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-4">
                    <h3 className="text-sm text-gray-400 mb-2">
                      Latest Transactions
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors duration-300">
                        <div className="flex items-center">
                          <span className="material-symbols-outlined text-green-500 mr-2">
                            arrow_downward
                          </span>
                          <span>Bought 5.2 kWh</span>
                        </div>
                        <span className="text-sm">$0.62</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors duration-300">
                        <div className="flex items-center">
                          <span className="material-symbols-outlined text-emerald-500 mr-2">
                            arrow_upward
                          </span>
                          <span>Sold 8.7 kWh</span>
                        </div>
                        <span className="text-sm">$1.30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>
    </div>
  );
}

export default Hero;
