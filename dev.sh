#!/usr/bin/env bash
# Atajos del portafolio (todo corre en Docker).
#   ./dev.sh up          desarrollo con recarga automática → http://localhost:5900
#   ./dev.sh down        apaga el entorno de desarrollo
#   ./dev.sh reset       apaga y borra node_modules/.next del contenedor
#   ./dev.sh logs        sigue los logs de desarrollo
#   ./dev.sh sh          consola dentro del contenedor de desarrollo
#   ./dev.sh check       lint + build dentro del contenedor
#   ./dev.sh prod        construye y levanta la imagen de producción → http://localhost:5901
#   ./dev.sh prod:down   apaga la de producción
set -euo pipefail
cd "$(dirname "$0")"
export UID_DEV="$(id -u)" GID_DEV="$(id -g)"
DEV="docker compose -f docker-compose.dev.yml"
PROD="docker compose -f docker-compose.yml"

case "${1:-}" in
  up)        $DEV up -d --build; echo; echo "Portafolio (dev)  http://localhost:5900";;
  down)      $DEV down;;
  reset)     $DEV down -v;;
  logs)      $DEV logs -f --tail=100 web;;
  sh)        $DEV exec web sh;;
  check)     $DEV exec web sh -c 'pnpm lint && pnpm build';;
  prod)      $PROD up -d --build; echo; echo "Portafolio (prod) http://localhost:5901";;
  prod:down) $PROD down;;
  *)         sed -n '2,10p' "$0";;
esac
