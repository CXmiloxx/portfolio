# Portafolio — Camilo Guapacha

Sitio personal y hoja de vida: **https://portafolio.buildrion.com**

Está escrito para dos lectores a la vez: quien no es técnico (cada proyecto empieza con *en palabras
simples*) y el ingeniero (arquitectura, stack y un mapa animado de cada sistema). Bilingüe (ES/EN),
tema claro y oscuro, y datos en vivo de npm.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Cache Components, Turbopack), React 19, TypeScript estricto |
| Estilos | Tailwind CSS v4 con tokens propios (`styles/`) |
| Movimiento | GSAP (ScrollTrigger, SplitText) + Lenis; todo respeta `prefers-reduced-motion` |
| Fuentes | Archivo (eje de ancho) y JetBrains Mono |
| Datos en vivo | API de npm con `'use cache'` + `cacheLife('days')`; si falla, la cifra se oculta |

## Arquitectura

La regla: **los hechos no se repiten por idioma y los componentes no tienen texto**.

```
app/                         rutas (delgadas: solo componen)
  [lang]/layout.tsx            layout raíz por idioma, metadata y JSON-LD
  [lang]/page.tsx              portafolio
  [lang]/cv/page.tsx           hoja de vida A4 imprimible
  [lang]/opengraph-image.tsx   imagen para redes
  sitemap.ts · robots.ts · icon.svg · globals.css
types/                       contratos, un archivo por dominio (sin barril)
  i18n · project · diagram · open-source · career · skills · dictionary
data/                        hechos neutros: perfil, proyectos, diagramas, carrera, stack
i18n/
  config.ts                    idiomas, localize(), formatos
  dictionaries.ts              getDictionary(locale)
  es/ · en/                    textos por sección (site, about, work, open-source, career, contact)
lib/                         lógica sin UI
  content.ts                   selectores: unen data/ + i18n/ en modelos listos para pintar
  npm.ts · seo.ts · site.ts · theme.ts · fonts.ts · format.ts · sections.ts · locale.ts
styles/                      tokens · base · utilities · motion · print
components/
  layout/                      header, footer, riel social, skip link
  sections/                    una sección de la página por archivo
  projects/                    caso de estudio, diagrama de arquitectura, leyenda, índice
  open-source/                 proyecto destacado, tarjeta, comando de instalación, cifras npm
  cv/                          hoja de vida
  ui/                          primitivas sin estado (logo, íconos, chips, títulos, marquesina…)
  interactive/                 componentes cliente: copiar, imprimir, tema
  motion/                      efectos cliente, uno por archivo (gsap.ts registra plugins)
brand/                       identidad: símbolo, logos, banner animado y guía
Dockerfile · Dockerfile.dev · docker-compose*.yml · dev.sh
```

Flujo: `data/` + `i18n/<locale>/` → `lib/content.ts` → `components/sections/*` → `app/[lang]/page.tsx`.

### Dónde cambiar qué

| Quiero… | Edito |
|---|---|
| Un texto | `i18n/es/<sección>.ts` **y** `i18n/en/<sección>.ts` (TypeScript avisa si falta uno) |
| Año, estado, stack o capas de un proyecto | `data/projects.ts` |
| Un proyecto nuevo | id en `types/project.ts` → hechos en `data/projects.ts` → textos en ambos idiomas |
| El mapa de un sistema | `data/diagrams.ts` (coordenadas en un lienzo de 480×330) |
| Correo, redes, enlaces | `data/profile.ts` |
| Un color | `styles/tokens.css` (nunca hex sueltos en componentes) |
| Una animación de scroll | atributo `data-anim` en el componente; el efecto vive en `components/motion/scroll-motion.tsx` |

## Desarrollo (Docker)

Todo corre en contenedores; no hace falta Node en la máquina.

```bash
./dev.sh up          # desarrollo con recarga automática → http://localhost:5900
./dev.sh logs        # logs
./dev.sh check       # lint + build dentro del contenedor
./dev.sh down        # apagar   ·   ./dev.sh reset  borra node_modules/.next del contenedor
./dev.sh prod        # imagen de producción → http://localhost:5901
```

| Archivo | Qué es |
|---|---|
| `Dockerfile` | Producción multi-etapa: dependencias → build → runtime mínimo con el servidor *standalone* de Next.js, usuario sin privilegios y healthcheck (~220 MB) |
| `Dockerfile.dev` | Node 22 + pnpm; el código se monta como volumen |
| `docker-compose.dev.yml` | Desarrollo: puerto 5900, `node_modules` y `.next` en volúmenes propios |
| `docker-compose.yml` | Producción: puerto 5901, sistema de archivos de solo lectura, `no-new-privileges` |

Sin Docker también funciona: `pnpm install && pnpm dev`.

`NEXT_PUBLIC_SITE_URL` es opcional: por defecto `https://portafolio.buildrion.com`.

## Rutas

`/` redirige a `/es`; `/en` es la versión en inglés; `/es/cv` y `/en/cv` la hoja de vida.
