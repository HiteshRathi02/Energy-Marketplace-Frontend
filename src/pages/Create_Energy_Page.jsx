import React from "react";
import Header from "../components/Header.jsx";
import Create_Energy_NFT from "../components/Create_Energy_NFT.jsx";

function Create_Energy_Page() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <Header />
        <Create_Energy_NFT/>
      </div>
    </>
  );
}

export default Create_Energy_Page;
