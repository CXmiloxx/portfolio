export type Theme = "light" | "dark"

/** Fired on window whenever the theme changes (canvas effects re-read colours). */
export const THEME_EVENT = "themechange"

/** Inline script for <head>: applies the saved theme, else the OS one, before first paint. */
export const themeBootScript =
  "try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}"
