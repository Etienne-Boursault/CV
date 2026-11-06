#!/usr/bin/env bash
# Régénère les deux CV en PDF à partir de index.html et de sa feuille d'impression (css/cv.css, @media print).
# À relancer après chaque modification des textes, avant de publier.
#   français : file/pdf/Etienne_Boursault-CV.pdf
#   anglais  : file/pdf/Etienne_Boursault-Resume.pdf (nom de l'ancien PDF, pour ne casser aucun lien)
set -euo pipefail
ici="$(cd "$(dirname "$0")/.." && pwd)"
chrome="${CHROME:-}"
if [ -z "$chrome" ]; then
  for c in "/c/Program Files/Google/Chrome/Application/chrome.exe" "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" google-chrome chromium; do
    if command -v "$c" >/dev/null 2>&1 || [ -x "$c" ]; then chrome="$c"; break; fi
  done
fi
[ -n "$chrome" ] || { echo "Chrome introuvable : indiquer son chemin dans CHROME=" >&2; exit 1; }
# Sous Windows (Git Bash), Chrome attend un chemin Windows dans l'URL file://
page="$ici/index.html"
command -v cygpath >/dev/null 2>&1 && page="$(cygpath -m "$page")"
for l in fr en; do
  [ "$l" = fr ] && sortie="$ici/file/pdf/Etienne_Boursault-CV.pdf" || sortie="$ici/file/pdf/Etienne_Boursault-Resume.pdf"
  cible="$sortie"; command -v cygpath >/dev/null 2>&1 && cible="$(cygpath -m "$sortie")"
  "$chrome" --headless --disable-gpu --no-pdf-header-footer --virtual-time-budget=5000 \
    --print-to-pdf="$cible" "file:///${page#/}?lang=$l" 2>/dev/null
  echo "$l : $sortie"
done
