# Dashboard Baseline

Baseline React + Vite + TypeScript + Tailwind dashboard scaffold

## Features
- Left **sidebar** for navigation
- Clean, minimal layout with muted professional colors
- Flexible components: `Sidebar`, `Header`, `Dashboard` page

## Quick start
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Build: `npm run build`
4. Preview build: `npm run preview`

## Notes & next steps
- Add additional pages, charts, auth, and API integration as needed.
- Replace placeholder content and icons with real data.

## Integrasi Arsip Digital (otomatis)
Proyek ini sudah menambahkan GitHub Action untuk otomatis menyinkronkan build dari `hrvd-git/Arsip-Digital-BPHL-I` ke `public/apps/bphl`.

- Workflow: `.github/workflows/sync-arsip-digital.yml` (manual dispatch, scheduled daily, or on push to `main`).
- Setelah sinkron, buka `http://<host>/apps/bphl/index.html` melalui dashboard di menu **Arsip Digital (BPHL)**.
- Jika Anda ingin menonaktifkan atau menyesuaikan jadwal/repo, edit file workflow tersebut.

Enjoy! 🧩