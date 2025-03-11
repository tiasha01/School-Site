import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({

  server: {
    host: '0.0.0.0',
  },
  plugins: [react(), basicSsl()],
})
