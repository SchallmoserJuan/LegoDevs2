import React from 'react';
import styles from './Bitacora.module.css';

const LogCards = () => {
  const cardsData = [
    {
      title: 'Información del Proyecto',
      content: 'Aplicación web de gestión de tareas en equipo, con énfasis en accesibilidad y usabilidad.',
      type: 'text'
    },
    {
      title: 'Metodología',
      content: 'Seguimos Scrum con sprints de 2 semanas, revisiones constantes y retrospectivas para mejorar el flujo de trabajo.',
      highlight: 'Scrum',
      type: 'text'
    },
    {
      title: 'Roles y Responsabilidades',
      type: 'list',
      items: [
        { name: 'Juan', role: 'Backend' },
        { name: 'Sofía', role: 'UX/UI' },
        { name: 'Carlos', role: 'Frontend' },
        { name: 'Nahir', role: 'QA' },
        { name: 'Rodrigo', role: 'PM' }
      ]
    }
  ];

  return (
    <section className={styles.logCards}>
      {cardsData.map((card, index) => (
        <div key={index} className={styles.card}>
          <h3>{card.title}</h3>
          {card.type === 'text' ? (
            <p>
              {card.highlight ? (
                <>
                  Seguimos <strong>{card.highlight}</strong> con sprints de 2 semanas,
                  revisiones constantes y retrospectivas para mejorar el flujo de trabajo.
                </>
              ) : (
                card.content
              )}
            </p>
          ) : (
            <ul>
              {card.items.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.name}:</strong> {item.role}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default LogCards;