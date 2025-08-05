import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // The 'base' property should be set to '/' for most hosted websites
  // where the document root points directly to the build output.
  // This ensures all assets (JS, CSS) are referenced from the domain root.
  base: '/',
});
