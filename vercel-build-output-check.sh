#!/usr/bin/env sh
set -e
npm run build
if [ ! -d dist ]; then
  echo "dist/ not found after build" >&2
  exit 1
fi
echo "OK: dist/ exists"

