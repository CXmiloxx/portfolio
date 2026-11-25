# Identidad — Camilo Guapacha

## Idea

**`<cg/>`: mis iniciales como una etiqueta de código.** Dice en un vistazo quién soy (Camilo
Guapacha) y qué hago (escribo software). La etiqueta se cierra sola (`/>`): un componente completo,
igual que los sistemas que entrego.

## Símbolo

| Archivo | Uso |
|---|---|
| `mark-on-light.svg` / `mark-on-dark.svg` | Símbolo `<cg/>` sobre fondo claro u oscuro |
| `logo-horizontal-on-light.svg` / `-on-dark.svg` | Símbolo + nombre + rol |
| `favicon.svg` (= `../app/icon.svg`) | Solo "cg" sobre el cuadro señal: a 16 px los signos `< />` no se leen |
| `banner-dark.svg` / `banner-light.svg` | Banner animado 1280×320 (README de GitHub, redes), con la fuente Archivo incrustada |

Geometría (lienzo 130×56, trazo 6, extremos redondeados): `<`, `/` y `>` en color señal; `c` y `g`
en el color del texto. En código: `components/ui/logo.tsx`; con `mono` todo va en un solo color
(por ejemplo, sobre la banda señal).

Reglas: no separar las letras de los signos, no cambiar los colores de lugar, no rotar. Ancho
mínimo 48 px para el símbolo completo; por debajo, usar el favicon.

## Color

| Token | Oscuro | Claro | Uso |
|---|---|---|---|
| `paper` | `#0A0A0B` | `#F2EFE8` | Fondo |
| `paper-2` | `#121214` | `#E9E5DB` | Paneles |
| `ink` | `#EDEAE3` | `#0E0E0F` | Texto principal |
| `ink-2` | `#B4B0A7` | `#45433E` | Texto secundario |
| `ink-3` | `#7D7A73` | `#6B6861` | Etiquetas |
| `line` | `#26262A` | `#D2CDC1` | Bordes |
| `signal` | `#FF5A1F` | `#E8461A` | Señal: un solo acento, nunca de fondo grande salvo bandas |
| `on-signal` | `#0A0A0B` | `#0A0A0B` | Texto sobre señal (siempre oscuro) |

Fuente de verdad: `styles/tokens.css`.

## Tipografía

- **Archivo** (variable, eje de ancho). Ancho 125 y peso 800 para titulares (`display`); ancho 72 para
  subtítulos (`display-narrow`); ancho 100 para texto.
- **JetBrains Mono** para etiquetas, datos y código (`eyebrow`).

## Voz

Clara antes que técnica. Primero para qué sirve algo, en palabras que entiende cualquiera; después
cómo está construido. Sin frases de venta, superlativos ni promesas más grandes que el trabajo real
(por ejemplo: despliegue sí; "construyo servidores", no).
