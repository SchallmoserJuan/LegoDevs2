// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home/Home.jsx";
// import Bitacora from "./pages/Bitacora/Bitacora";
// import SetsLego from "./pages/SetsLego/SetsLego";
// import ApiLego from "./pages/ApiLego/ApiLego";
// import Integrante from "./pages/Integrante/Integrante";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar fijo a la izquierda */}
        <Sidebar />

        {/* Contenido principal que cambia según la ruta */}
        <main className="main-content">
          <Routes>
            {/* Ruta de inicio */}
            <Route path="/" element={<Home />} />

            {/* Rutas de integrantes (ajusta los IDs según tu equipo) */}
            {/* <Route path="/integrante/1" element={<Integrante id={1} />} />
            <Route path="/integrante/2" element={<Integrante id={2} />} />
            <Route path="/integrante/3" element={<Integrante id={3} />} /> */}

            {/* Ruta de bitácora */}
            {/* <Route path="/bitacora" element={<Bitacora />} /> */}

            {/* Ruta para sets desde JSON */}
            {/* <Route path="/sets-lego" element={<SetsLego />} /> */}

            {/* Ruta para datos desde API */}
            {/* <Route path="/api-lego" element={<ApiLego />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
