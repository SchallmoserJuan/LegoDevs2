import React from "react";
import LogSummary from "./LogSummary";
import LogCards from "./LogCards";
import Timeline from "./Timeline";
import styles from "./Bitacora.module.css";

const Bitacora = () => {
  return (
    <div className={styles.bitacora}>
      <section className={styles.hero}>
        <h1>Bitácora</h1>
        <p className={styles.heroText}>
          Documentamos nuestro proceso de desarrollo, metodologías y aprendizajes
          como equipo de trabajo.
        </p>
      </section>

      <LogSummary />
      <LogCards />
      <Timeline />
    </div>
  );
};

export default Bitacora;