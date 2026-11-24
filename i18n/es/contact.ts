import type { ContactCopy, CvCopy } from "@/types/dictionary"

export const contact: ContactCopy = {
  eyebrow: "Contacto",
  big: "Contacto",
  title: "¿Quieres saber más de algún proyecto?",
  body: "Escríbeme por cualquiera de estos medios. Puedo explicar cualquier sistema de esta página en lenguaje sencillo o con todo el detalle técnico.",
  channels: { email: "Correo", whatsapp: "WhatsApp", linkedin: "LinkedIn", github: "GitHub", cv: "Hoja de vida" },
}

export const cv: CvCopy = {
  back: "Volver al portafolio",
  print: "Guardar como PDF",
  summaryTitle: "Perfil",
  summary:
    "Desarrollador Full Stack y estudiante de Ingeniería de Sistemas y Computación (UTP). Llevo sistemas web multiempresa a producción de principio a fin: interfaz, API, base de datos e infraestructura. TypeScript en todo el stack (Next.js, NestJS, Prisma, MySQL) y despliegue con Docker en servidores Linux, con SSL y Cloudflare. Mantengo Tourwright, una herramienta open source publicada en npm.",
  achievementsTitle: "Logros",
  achievements: [
    "Construí una plataforma de créditos de 13 servicios con arquitectura hexagonal, conectada a DataCrédito (Experian) y a CONSULTAR, con reporte mensual de cartera a la central.",
    "Entregué 10+ sistemas que hoy usan empresas, cubriendo frontend, backend, datos y despliegue.",
    "Automaticé el seguimiento de procesos judiciales: actuaciones y documentos se sincronizan solos desde la Rama Judicial y SAMAI.",
    "Creé y mantengo Tourwright, open source con miles de descargas mensuales en npm (CLI, API y servidor MCP).",
  ],
  experienceTitle: "Experiencia",
  projectsTitle: "Proyectos destacados",
  skillsTitle: "Habilidades",
  educationTitle: "Formación",
  languagesTitle: "Idiomas",
  openSourceTitle: "Open source",
}
