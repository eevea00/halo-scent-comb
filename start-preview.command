#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

echo "========================================================"
echo "  HALO Scent Comb - Local Web Preview Server"
echo "  URL: http://127.0.0.1:8000/"
echo "  Press Ctrl+C in this window to stop the server."
echo "========================================================"
echo ""

if command -v python3 >/dev/null 2>&1; then
  (sleep 1 && open "http://127.0.0.1:8000/" 2>/dev/null || true) &
  python3 -m http.server 8000 --bind 127.0.0.1
elif command -v python >/dev/null 2>&1; then
  (sleep 1 && open "http://127.0.0.1:8000/" 2>/dev/null || true) &
  python -m http.server 8000 --bind 127.0.0.1
else
  echo "[!] Python 3 was not found."
  echo "Please install Python 3 or visit: https://eevea00.github.io/halo-scent-comb/"
  read -r -p "Press Enter to exit..."
fi
