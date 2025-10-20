import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Bitacora from "./pages/Bitacora/Bitacora";
import ProfilePage from "./pages/Profile/ProfilePage";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container" style={{ display: "flex" }}>
        <Sidebar />
        <main className="main-content" style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bitacora" element={<Bitacora />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;