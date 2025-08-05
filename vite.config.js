import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  // Use '/' for development and the repository name for production
  const base = command === 'build' ? '/aurora-lumen-lp/' : '/';

  return {
    plugins: [react()],
    base: base,
  };
});