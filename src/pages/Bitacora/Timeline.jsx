import React from 'react';
import styles from './Bitacora.module.css';

const Timeline = () => {
  const timelineData = [
    { week: 'Semana 1-2', description: 'Investigación y definición de requisitos.' },
    { week: 'Semana 3-4', description: 'Diseño UI/UX: wireframes y prototipos.' },
    { week: 'Semana 5-8', description: 'Desarrollo del frontend y backend.' },
    { week: 'Semana 9-10', description: 'Pruebas y corrección de errores.' },
    { week: 'Semana 11', description: 'Lanzamiento y despliegue.' }
  ];

  return (
    <section className={styles.timeline}>
      <h2>Timeline del Proyecto</h2>
      <div className={styles.timelineGrid}>
        {timelineData.map((block, index) => (
          <div key={index} className={styles.timelineBlock}>
            <h3>{block.week}</h3>
            <p>{block.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;