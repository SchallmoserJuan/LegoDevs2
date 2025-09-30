import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>🧱 Bienvenidos a LegoDevs</h1>
      <p>Este es nuestro proyecto grupal temático de LEGO</p>

      {/* Aquí irá el contenido de tu index.html */}
      <div className="team-info">
        <h2>Nuestro Equipo</h2>
        <p>Descripción del equipo...</p>
      </div>
    </div>
  );
};

export default Home;
