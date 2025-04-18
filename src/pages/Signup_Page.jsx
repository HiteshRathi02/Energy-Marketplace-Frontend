import React from "react";
import Header from "../components/header.jsx";
import  Signup  from "../components/Signup.jsx";

function Sign_Page() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <Header />
        <Signup/>
      </div>
    </>
  );
}

export default Sign_Page;
