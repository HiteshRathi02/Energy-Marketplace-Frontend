import React from "react";
import { useNavigate } from "react-router-dom";

function CTA_Section() {
  let navigate = useNavigate();
  return (
    <div className=" bg-gray-900 text-gray-100">
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 opacity-10 rounded-full -mt-20 -mr-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-600 opacity-10 rounded-full -mb-10 -ml-10"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Join the Energy Revolution?
                </h2>
                <p className="text-gray-300">
                  Sign up today and start trading clean energy with your
                  community. Be part of the solution for a sustainable future.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  onClick={() => navigate("/signup", { replace: true })}
                >
                  Sign Up
                </button>
                <button className="px-8 py-3 rounded-lg border-2 border-green-500 hover:bg-gray-800 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                  <a href="mailto:btech10687.21@bitmesra.ac.in">Contact Us</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTA_Section;
