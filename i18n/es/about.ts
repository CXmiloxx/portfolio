import type { AboutCopy } from "@/types/dictionary"

export const about: AboutCopy = {
  eyebrow: "Qué hago",
  title: "Construyo sistemas completos: desde la idea hasta que la gente los usa.",
  intro:
    "Una empresa llega con una necesidad —automatizar un proceso, ofrecer un servicio en línea u ordenar su información— y yo me encargo de todo el camino: entender qué necesita, diseñar cómo va a funcionar, programarlo y dejarlo publicado y funcionando.",
  process: [
    {
      title: "Entender",
      body: "Converso con quienes van a usar el sistema y defino qué debe hacer y qué no.",
      tech: "Requisitos · flujos · alcance",
    },
    {
      title: "Diseñar",
      body: "Decido cómo se organiza: las pantallas, los datos que se guardan y las reglas del negocio.",
      tech: "Arquitectura · modelo de datos · prototipos",
    },
    {
      title: "Construir",
      body: "Programo las pantallas, la lógica que procesa cada solicitud y la base de datos.",
      tech: "Next.js · NestJS · Prisma · MySQL",
    },
    {
      title: "Publicar y mejorar",
      body: "Lo pongo en línea, lo mantengo y lo ajusto con lo que muestra el uso real.",
      tech: "Docker · Linux · Cloudflare",
    },
  ],
  whoTitle: "Quién soy",
  who: "Soy Juan Camilo Guapacha, de Pereira. Me formé como tecnólogo en Análisis y Desarrollo de Software en el SENA y desde 2025 trabajo construyendo sistemas para empresas. Hoy, además, estudio Ingeniería de Sistemas y Computación en la Universidad Tecnológica de Pereira.",
  nowTitle: "Ahora mismo",
  now: [
    { label: "Estudio", value: "Ingeniería de Sistemas y Computación", detail: "Universidad Tecnológica de Pereira · desde agosto de 2026" },
    { label: "Trabajo", value: "Desarrollador de software", detail: "Sistemas para el sector financiero y el sector público" },
    { label: "Construyo", value: "Tourwright", detail: "Proyecto open source: videos tutoriales automáticos" },
  ],
}
