import React from "react";
import Header from "../components/Header.jsx";
import Bar_graph from "../components/Bar_graph.jsx";

function Data_page() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <Header />
        <Bar_graph/>
      </div>
    </>
  );
}

export default Data_page;
