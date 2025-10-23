// src/pages/Profile/ProfilePage.jsx
// import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { teamData } from "../../assets/data/teamData";
import { ProfileHeader } from "./ProfileHeader";
import { BioSection } from "./BioSection";
import { ProjectsSection } from "./ProjectSection";
import { SkillsSection } from "./SkillSection";
import { StatsSection } from "./StatsSection";
import { ContactSection } from "./ContactSection";
// import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  const { name } = useParams();
  // const [showProjects, setShowProjects] = useState(true);

  // Buscar miembro del equipo
  const member = teamData.find((m) => m.id === name);

  // Redirigir si no existe
  if (!member) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>pagina de perfil</h1>
    </div>
  );
};

export default ProfilePage;