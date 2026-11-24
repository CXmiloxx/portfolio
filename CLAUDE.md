@AGENTS.md

# Reglas del proyecto

- **Sin commits ni push** hasta que el dueño lo autorice explícitamente.
- Arquitectura en `README.md`. Respetar las capas: `types/` → `data/` + `i18n/` → `lib/content.ts` → `components/` → `app/`.
- Los componentes no llevan texto: todo el copy vive en `i18n/es` y `i18n/en` (misma forma, tipada por `types/dictionary.ts`).
- Hechos que no cambian con el idioma (años, stack, enlaces, coordenadas) van en `data/`, una sola vez.
- Un componente por archivo, en la carpeta de su responsabilidad. Sin barriles (`index.ts` que reexporta), salvo `i18n/<locale>/index.ts`.
- Server Components por defecto; `"use client"` solo en `components/interactive/` y `components/motion/`.
- Colores solo por tokens de `styles/tokens.css`. Excepciones: imagen OG, ícono y `brand/`.
- Tono: informativo, no comercial. Cada proyecto: primero "en palabras simples", luego lo técnico.
- No inventar métricas ni clientes; nombres de clientes omitidos.
- Toda animación debe tener estado final legible con `prefers-reduced-motion`.
