import React from 'react';
import styles from './Bitacora.module.css';

const LogSummary = () => {
  return (
    <section className={styles.logSummary}>
      <h2>Resumen de la Bitácora</h2>
      <p>
        Esta bitácora refleja nuestro progreso en el desarrollo del proyecto,
        desde la investigación inicial hasta las pruebas finales.
      </p>
      <p>
        Cada miembro contribuyó con sus habilidades, mejorando tanto la calidad
        del producto como la forma en que trabajamos en equipo.
      </p>
    </section>
  );
};

export default LogSummary;
