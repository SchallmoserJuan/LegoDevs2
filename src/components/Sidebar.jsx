import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/bitacora", label: "Bitácora", icon: "📝" },
    { path: "/home#equipo", label: "Equipo", icon: "👥" },
    { path: "/integrante/1", label: "Juan", icon: "👤" },
    { path: "/integrante/2", label: "Sofia", icon: "👤" },
    { path: "/integrante/3", label: "Carlos", icon: "👤" },
    { path: "/integrante/4", label: "Nahir", icon: "👤" },
    { path: "/integrante/5", label: "Rodrigo", icon: "👤" },
    { path: "/sets-lego", label: "Sets LEGO", icon: "🧱" },
    { path: "/api-lego", label: "API LEGO", icon: "🔌" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>🧱 LEGO Team</h2>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
