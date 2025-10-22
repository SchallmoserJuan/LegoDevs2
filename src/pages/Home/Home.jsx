import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  // Datos del equipo
  const teamMembers = [
    {
      id: "juan",
      name: "Juan Schallmoser",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/lego/4.jpg"
    },
    {
      id: "sofia",
      name: "Sofía",
      role: "UX/UI Designer",
      image: "https://randomuser.me/api/portraits/lego/9.jpg"
    },
    {
      id: "carlos",
      name: "Carlos",
      role: "Frontend Developer",
      image: "/img/perfilCarlos.jpg"
    },
    {
      id: "nahir",
      name: "Nahir",
      role: "Project Manager",
      image: "https://d1m9vqlvl3fy94.cloudfront.net/role/attachment/185736/default_SkyLanePortrati2.png"
    },
    {
      id: "rodrigo",
      name: "Rodrigo Chico",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/lego/3.jpg"
    }
  ];

  // Pasos del proyecto
  const projectSteps = [
    {
      title: "Paso 1: Investigación",
      description: "Recolección de información y análisis de requerimientos.",
      status: "completo"
    },
    {
      title: "Paso 2: Diseño",
      description: "Creación de wireframes y diseño visual.",
      status: "completo"
    },
    {
      title: "Paso 3: Desarrollo",
      description: "Implementación del front-end y back-end.",
      status: "desarrollo"
    },
    {
      title: "Paso 4: Pruebas",
      description: "Revisión y corrección de errores.",
      status: "desarrollo"
    },
    {
      title: "Paso 5: Lanzamiento",
      description: "Entrega y despliegue final del proyecto.",
      status: "pendiente"
    }
  ];

  return (
    <div className={styles.homeContainer}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <h1>Bienvenidos a nuestro Portfolio</h1>
        <p className={styles.heroText}>
          Somos un equipo de desarrolladores apasionados por crear y aprender juntos.
        </p>
        <a href="#equipo" className={styles.ctaBtn}>
          Conoce al equipo
        </a>
      </section>

      {/* TEAM PREVIEW */}
      <section id="equipo" className={styles.teamPreview}>
        <h2>Nuestro equipo</h2>
        <div className={styles.teamMembers}>
          {teamMembers.map((member) => (
            <Link 
              key={member.id} 
              to={`/equipo/${member.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className={styles.member}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  loading="lazy"
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* LOG PREVIEW - Últimos Avances */}
      <section className={styles.logPreview}>
        <h2>Últimos avances</h2>
        <div className={styles.steps}>
          {projectSteps.map((step, index) => (
            <div 
              key={index} 
              className={`${styles.step} ${styles[`step-${step.status}`]}`}
            >
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;