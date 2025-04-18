import React from "react";

function Login() {
  const [hide, setHide] = React.useState(true);
  return (
    <div id="webcrumbs">
      <div className=" h-max bg-gradient-to-br from-primary-100 to-primary-50 flex flex-col justify-center items-center p-2 font-sans">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-primary-100 mt-12 mb-14">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-primary-800">
              Login to Your Account
            </h1>
            <p className="text-gray-500">
              Welcome back! Please enter your credentials
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label
                htmlFor="kNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Enter your K No.
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  id="kNumber"
                  className="text-gray-500 w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="K12345"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <input
                  type={hide ? "password" : "text"}
                  id="password"
                  className="text-gray-500 w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="••••••••"
                  required
                />
                <button onClick={(e) => {
                    e.preventDefault(); 
                    setHide(!hide)}}>
                  <span className="absolute right-3 top-3 text-gray-500 cursor-pointer hover:text-gray-700 material-symbols-outlined">
                    {hide ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium shadow-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
