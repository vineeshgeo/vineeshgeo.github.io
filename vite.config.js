import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// This is the special user-site repository: https://vineeshgeo.github.io/
// Therefore the site is served from the domain root and base must be '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
