import React from "react";
import Header from "../components/header.jsx";
import  Login  from "../components/Login.jsx";

function Login_Page() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <Header />
        <Login/>
      </div>
    </>
  );
}

export default Login_Page;
