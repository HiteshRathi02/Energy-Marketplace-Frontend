import React from "react";

function Feature() {
  return (
    <div className=" bg-gray-900 text-gray-100">
      {/* Feature Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                EnergyPeer
              </span>
              ?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our platform empowers communities to trade energy directly,
              reducing costs and supporting local renewable energy production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-green-500">
                  eco
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Energy</h3>
              <p className="text-gray-400">
                Support and utilize renewable energy sources within your local
                community.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-green-500">
                  payments
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Cost Efficiency</h3>
              <p className="text-gray-400">
                Cut out the middleman and trade energy at better rates than
                traditional utilities.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-green-500">
                  shield
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Trading</h3>
              <p className="text-gray-400">
                Our blockchain technology ensures safe, transparent transactions
                between users.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-green-500">
                  group
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Community Building</h3>
              <p className="text-gray-400">
                Connect with like-minded individuals to create a sustainable
                energy ecosystem.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-green-500">
                  speed
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Real-Time Monitoring</h3>
              <p className="text-gray-400">
                Track your energy production and consumption with our intuitive
                dashboard.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-green-500">
                  auto_graph
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Contracts</h3>
              <p className="text-gray-400">
                Automated agreements ensure fair and reliable energy exchange
                between parties.
              </p>
            </div>
          </div>
        </div>
        {/* Next: "Add testimonial section" */}
      </section>
    </div>
  );
}

export default Feature;
