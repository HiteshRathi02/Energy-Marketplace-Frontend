import React from "react";

function Create_Energy_NFT() {
  return (
    <div id="webcrumbs">
      <div className="min-h-screen w-full bg-primary-50 p-4 sm:p-8 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-sm w-108 max-w-3xl mx-auto overflow-hidden transform transition-all hover:shadow-md">
          <div>
            <h1 className="text-l md:text-2xl font-bold text-center py-3 text-primary-700">
              Create an Energy NFT
            </h1>
          </div>
          <div className="p-4 md:p-4">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="col-span-1">
                <label className="block mb-1 font-medium text-gray-700">
                  Energy Amount (kWh)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full text-gray-500 px-2 py-2 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    placeholder="Enter energy amount"
                  />
                  <span className="absolute right-10 top-2 text-gray-500">
                    kWh
                  </span>
                </div>
                {/* Next: "Add input validation with colored feedback" */}
              </div>

              <div className="col-span-1">
                <label className="block mb-1 font-medium text-gray-700">
                  Price (ETH)
                </label>
                <div className="relative">
                  <div className="flex flex-col gap-4">
                    <input
                      type="number"
                      className="text-gray-500 w-full px-2 py-2 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="Enter price"
                    />
                    <span className="absolute right-10 top-2 text-gray-500">
                      ETH
                    </span>
                  </div>
                </div>
                {/* Next: "Add price preview in USD" */}
              </div>

              <div className="col-span-1">
                <label className="block mb-1 font-medium text-gray-700">
                  Energy Source
                </label>
                <div className="relative">
                  <select className="w-full px-2 py-2 text-gray-500 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none appearance-none cursor-pointer bg-white">
                    <option value="" disabled selected>
                      Select energy source
                    </option>
                    <option value="solar">Solar</option>
                    <option value="wind">Wind</option>
                    <option value="hydro">Hydro</option>
                  </select>
                  <div className="text-gray-500 absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
                {/* Next: "Add icons for each energy source option" */}
              </div>

              <div className="col-span-1">
                <label className="block mb-1 font-medium text-gray-700">
                  Date Generated
                </label>
                <input
                  type="date"
                  className="text-gray-500 w-full px-2 py-2 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                />
                {/* Next: "Add date range validation" */}
              </div>

              <div className="col-span-1">
                <label className="block mb-1 font-medium text-gray-700">
                  Time Generated
                </label>
                <input
                  type="time"
                  className="w-full text-gray-500 px-2 py-2 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                />
                {/* Next: "Add timezone selector dropdown" */}
              </div>

              <div className="col-span-1">
                <label className="block mb-1 font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  className="w-full text-gray-500 px-2 py-2 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                  placeholder="Enter location"
                />
              </div>

              <div className="col-span-1 md:col-span-2 mt-2">
                <div className="p-2 bg-primary-50 rounded-sm border-l-2 border-primary-200 flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <p className="ml-2 text-sm text-gray-700">
                    Creating an Energy NFT helps track renewable energy
                    production on the blockchain. Your NFT will be tradable on
                    the open market.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <button className="px-4 py-1.5 rounded-xl bg-primary-600 text-white font-normal hover:bg-primary-700 transform hover:translate-y-[-2px] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:ring-offset-1 shadow-none">
                Create Energy NFT
              </button>
              {/* Next: "Add a loading state for the button" */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create_Energy_NFT;
