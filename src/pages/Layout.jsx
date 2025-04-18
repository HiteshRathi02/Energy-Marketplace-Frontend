import React from "react";
import Header from "../components/header.jsx";
import Hero from "../components/Hero.jsx";
import Feature from "../components/Feature.jsx";
import CTA_Section from "../components/CTA_Section.jsx";
import Footer from "../components/Footer.jsx";

function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <Header />
        <Hero />
        <Feature />
        <CTA_Section />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
