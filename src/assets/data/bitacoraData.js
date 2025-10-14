// bitacoraData.js
// Timeline del proyecto legodevs

export const bitacoraData = [
  {
    id: 1,
    title: "Migracion a react (TP2)",
    date: "2025-10-08",
    description:
      "Inicio de la migracion del proyecto estatico a una single page application (SPA) utilizando React y React Router.",
    status: "en-progreso",
  },
  {
    id: 2,
    title: "Diseño de perfiles de integrantes",
    date: "2025-09-15",
    description:
      "Cada integrante del equipo diseña su perfil con información personal, habilidades y proyectos.",
    status: "completado",
  },
  {
    id: 3,
    title: "Maquetación inicial",
    date: "2025-09-01",
    description:
      "Se crea la estructura básica del sitio web con HTML y CSS, incluyendo la barra lateral fija y el área de contenido principal.",
    status: "completado",
  },
];

// Funcion para calcular el tiempo transcurrido desde una fecha dada
export const getRelativeTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);

  if (diffDays === 0) return "Hoy";
  if (diffDays === 1) return "Ayer";
  if (diffDays < 7) return `Hace ${diffDays} días`;
  if (diffWeeks === 1) return "Hace 1 semana";
  if (diffWeeks < 4) return `Hace ${diffWeeks} semanas`;
  if (diffMonths === 1) return "Hace 1 mes";
  return `Hace ${diffMonths} meses`;
};
