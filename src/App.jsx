import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout.jsx";
import Sign_Page from "./pages/Signup_Page.jsx";
import Login_Page from "./pages/Login_Page.jsx";
import Create_Energy_Page from "./pages/Create_Energy_Page.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/signup" element={<Sign_Page />} />
            <Route path="/login" element={<Login_Page />} />
            <Route path="/create" element={<Create_Energy_Page />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
