import React from "react";
import productsData from "../../assets/data/products.json";
import styles from "./JsonDataPage.module.css";

const JsonDataPage = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>Catálogo de Productos (desde JSON)</h1>
        <p>
          Estos datos se están cargando localmente desde un archivo{" "}
          <code>products.json</code>.
        </p>
      </header>

      <div className={styles.gridContainer}>
        {productsData.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h3>{product.name}</h3>
              <p className={styles.category}>{product.category}</p>
              <p className={styles.price}>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JsonDataPage;