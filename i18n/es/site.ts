import type { HeroCopy, SiteCopy } from "@/types/dictionary"

export const site: SiteCopy = {
  meta: {
    title: "Camilo Guapacha — Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack en Pereira, Colombia, y estudiante de Ingeniería de Sistemas en la UTP. Desarrollo sistemas web completos: pantallas, lógica, base de datos y despliegue.",
    cvTitle: "Hoja de vida — Camilo Guapacha",
  },
  nav: {
    about: "Qué hago",
    work: "Proyectos",
    openSource: "Open source",
    experience: "Trayectoria",
    skills: "Tecnologías",
    contact: "Contacto",
    switchTo: "Ver en inglés",
    menu: "Menú",
    close: "Cerrar",
    main: "Principal",
  },
  skipToContent: "Saltar al contenido",
  theme: { light: "Cambiar a tema claro", dark: "Cambiar a tema oscuro" },
  social: { label: "Redes y contacto" },
  boot: {
    lines: ["montando /interfaz", "levantando api :443", "migrando base de datos", "emitiendo certificado ssl", "desplegando en producción"],
    ready: "en línea",
    skip: "Saltar intro",
  },
  footer: { built: "Diseñado y construido por Camilo Guapacha con Next.js.", source: "Código fuente" },
  copy: { copy: "Copiar", copied: "Copiado" },
}

export const hero: HeroCopy = {
  status: "Pereira, Colombia",
  localTime: "Hora en Pereira",
  role: "Desarrollador Full Stack",
  headline: "Desarrollo sistemas web completos,",
  headlineEm: "de la pantalla a la base de datos.",
  intro:
    "Trabajo en lo que la gente ve —pantallas y formularios— y en lo que no se ve: la lógica que procesa cada solicitud y la base de datos donde se guarda la información. Después lo dejo publicado y funcionando.",
  cta: "Ver proyectos",
  cv: "Hoja de vida",
  facts: {
    systems: "sistemas en producción",
    study: "Ingeniería de Sistemas, en curso",
    downloads: "descargas al mes de Tourwright",
  },
  flow: {
    title: "Qué pasa cuando alguien usa un sistema",
    caption: "Desarrollo las cuatro partes.",
    steps: [
      { node: "Pantalla", text: "Una persona solicita un crédito desde la página web." },
      { node: "API", text: "La lógica revisa los datos y aplica las reglas del negocio." },
      { node: "Base de datos", text: "La solicitud queda guardada de forma segura." },
      { node: "Respuesta", text: "La persona ve el resultado en segundos." },
    ],
  },
}
