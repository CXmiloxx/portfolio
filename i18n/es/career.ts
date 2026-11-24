import type { ExperienceCopy, PrinciplesCopy, SkillsCopy } from "@/types/dictionary"

export const experience: ExperienceCopy = {
  eyebrow: "Trayectoria",
  title: "De practicante a responsable de sistemas completos en dos años.",
  current: "Actual",
  jobs: {
    developer: {
      period: "Oct 2025 — hoy",
      role: "Desarrollador de Software",
      org: "Empresa de software del sector financiero",
      kind: "Tiempo completo",
      summary: "Construyo y mantengo sistemas para clientes de principio a fin: pantallas, lógica, bases de datos y despliegue.",
      highlights: [
        "Plataforma de créditos de 13 servicios con arquitectura hexagonal",
        "Sistema de recursos humanos multiempresa y seguimiento de procesos judiciales para entidades públicas",
      ],
    },
    freelance: {
      period: "Jun 2025 — Oct 2025",
      role: "Desarrollador independiente",
      org: "Proyectos propios con clientes",
      kind: "Freelance",
      summary: "Desarrollo a la medida, combinando aplicaciones web con soluciones de inteligencia artificial.",
      highlights: ["Billetera empresarial con NestJS", "Procesamiento de imágenes RAW con IA en Python"],
    },
    internship: {
      period: "Ene 2025 — Jul 2025",
      role: "Desarrollador Full Stack (etapa productiva SENA)",
      org: "World Travel Assist by HAS",
      kind: "Prácticas",
      summary: "Seis meses construyendo sistemas para una operación de asistencia médica, con foco en las pantallas y en la puesta en producción.",
      highlights: [
        "Sistema de citas y emergencias que reemplazó la coordinación por WhatsApp",
        "Aplicación multiempresa instalable (PWA)",
      ],
    },
  },
  educationTitle: "Formación",
  education: {
    utp: { title: "Ingeniería de Sistemas y Computación", org: "Universidad Tecnológica de Pereira", period: "2026 — en curso" },
    sena: { title: "Tecnólogo en Análisis y Desarrollo de Software", org: "SENA, Pereira", period: "2023 — 2025" },
  },
}

export const principles: PrinciplesCopy = {
  eyebrow: "Cómo trabajo",
  title: "Cuatro prácticas que sigo en cada proyecto.",
  intro: "Son las que hacen que un sistema sea confiable y fácil de mantener.",
  items: [
    {
      title: "Primero la estructura",
      body: "Antes de las pantallas defino cómo se divide el sistema en partes, para que pueda crecer sin rehacerlo.",
      tech: "Dominios separados · arquitectura hexagonal",
    },
    {
      title: "IA, con revisión",
      body: "Uso asistentes de IA para planear, probar y documentar más rápido, y construyo herramientas para ellos. Todo lo que producen lo leo, lo pruebo y lo entiendo.",
      tech: "Claude Code · servidor MCP en Tourwright · gitmoji-commits",
      highlight: true,
    },
    {
      title: "El mismo entorno para todos",
      body: "Cualquier desarrollador levanta el proyecto completo con un solo comando y obtiene lo mismo.",
      tech: "Docker · Docker Compose",
    },
    {
      title: "Lo dejo funcionando y documentado",
      body: "Publico el sistema con su dominio y certificado de seguridad, y dejo escrito cómo funciona y por qué.",
      tech: "Docker · Linux · Cloudflare · README",
    },
  ],
}

export const skills: SkillsCopy = {
  eyebrow: "Tecnologías",
  title: "Las herramientas con las que construyo.",
  alsoLabel: "También",
  groups: {
    frontend: { name: "Frontend", plain: "Pantallas y experiencia de uso" },
    backend: { name: "Backend", plain: "Lógica, servicios y APIs" },
    data: { name: "Datos", plain: "Bases de datos y almacenamiento" },
    infra: { name: "Despliegue", plain: "Publicar y mantener en línea" },
    ai: { name: "IA y automatización", plain: "Agentes, pruebas y tareas automáticas" },
  },
  languagesTitle: "Idiomas",
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Técnico: lectura, documentación y escritura" },
  ],
}
