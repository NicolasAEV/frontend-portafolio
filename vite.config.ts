import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
console.log('VITE_PORT:', process.env.VITE_PORT);
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  //
  const { VITE_PORT } = loadEnv(mode, process.cwd(), 'VITE_');
  return {plugins: [react(), tailwindcss()],
  server: {
    port: Number(VITE_PORT) || 3000,
  },
}
});
