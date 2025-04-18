import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [hide, setHide] = React.useState(true);
  return (
    <>
      <div className=" h-max bg-gradient-to-br from-primary-100 to-primary-50 flex flex-col justify-center items-center p-2 font-sans">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-primary-100 mt-4 mb-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-primary-800">
              Create Your Account
            </h1>
            <p className="text-gray-500">
              Welcome! Please enter your details to sign up
            </p>
          </div>
          <form className="space-y-3">
            <div className="space-y-3">
              <label
                htmlFor="kno"
                className="block text-sm font-medium text-gray-700"
              >
                Enter your K No.
              </label>
              <input
                type="text"
                id="kno"
                className=" text-gray-500 w-full px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                placeholder="Enter your K number"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="text-gray-500 w-full px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                placeholder="Choose a username"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={hide ? "password" : "text"}
                  id="password"
                  className=" text-gray-500 w-full px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  placeholder="Create a strong password"
                  required
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setHide(!hide);
                  }}
                >
                  <span className="absolute right-3 top-3 text-gray-500 cursor-pointer hover:text-gray-700 material-symbols-outlined">
                    {hide ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              className="text-primary-600 hover:text-primary-700 transition-colors duration-300 border-b-2 border-transparent hover:border-primary-600 py-1"
              onClick={() => navigate("/login", { replace: true })}
            >
              Log in
            </button>
          </div>
          {/* Next: "Add terms and conditions checkbox" */}
        </div>
      </div>
    </>
  );
}

export default Signup;
