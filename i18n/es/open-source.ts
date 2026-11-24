import type { OpenSourceSectionCopy } from "@/types/dictionary"

export const openSource: OpenSourceSectionCopy = {
  eyebrow: "Open source",
  title: "Dos herramientas que otros desarrolladores usan.",
  intro:
    "Además de mi trabajo, publico herramientas abiertas: cualquiera puede ver el código, instalarlas y usarlas. Las dos están pensadas para trabajar con asistentes de IA.",
  featuredLabel: "Proyecto principal",
  watch: "Ver el video de demostración",
  code: "Código",
  site: "Sitio",
  demo: "Demo",
  downloads: "descargas en el último mes",
  latest: "última versión en npm",
  demoSource: "Ejemplo tomado del README del proyecto.",
  skillLabel: "Skill para agentes de IA",
  projects: {
    tourwright: {
      tagline: "Videos tutoriales de un software, sin grabar ni editar.",
      description:
        "Se describe el recorrido en un archivo de texto y Tourwright abre la aplicación en un navegador real, la recorre, señala cada elemento, narra con voz natural y entrega el video con subtítulos. Si la aplicación cambia, el video se vuelve a generar en minutos.",
      points: [
        "Se usa desde la terminal, como API HTTP con cola de trabajos o como servidor MCP para agentes de IA",
        "Voces sin conexión (Piper, Pocket TTS) o en línea, con caché por frase",
        "`tourwright check` en CI avisa cuándo un video quedó desactualizado",
      ],
    },
    "gitmoji-commits": {
      tagline: "Una skill que les enseña a los asistentes de IA a registrar cambios de código como lo haría un desarrollador con experiencia.",
      description:
        "Lee el historial del repositorio para aprender el idioma, los scopes y el estilo del equipo; divide los cambios en commits de una sola intención y escribe un título que dice qué cambió y un cuerpo que explica por qué importa.",
      points: [
        "gitmoji + Conventional Commits, en el idioma del proyecto",
        "Detecta claves, contraseñas y archivos que no deben subirse",
        "Solo necesita git: Linux, macOS y Windows, sin dependencias",
      ],
      demo: {
        beforeLabel: "Lo que un agente suele hacer",
        before: "Update files and fix bug\n\n- Modified src/components/LoginForm.tsx\n- Updated package.json\n- Fixed bug in auth\n\n🤖 Generated with AI",
        afterLabel: "Con gitmoji-commits",
        after:
          "🐛 fix(auth): sesiones cerradas al cambiar la contraseña\n\nCambiar la contraseña dejaba abiertas las sesiones en otros dispositivos,\nasí que una sesión robada seguía funcionando. Ahora todas las sesiones\nactivas terminan cuando cambia la contraseña.",
      },
    },
  },
}
